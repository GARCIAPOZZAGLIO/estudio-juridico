import { useState, useEffect, useRef } from "react";
import { Phone, MapPin, Mail, Calendar, FileText, Search, Menu, X, Users, Briefcase, Shield, Home as HomeIcon, MessageSquare, Star, BookOpen, HelpCircle, ChevronDown, ChevronUp, Send, ArrowRight, Gavel, Building, Heart, Landmark, UserCheck, AlertCircle, CheckCircle } from "lucide-react";

const LOGO_SRC = process.env.PUBLIC_URL + "/img/logo-src.jpg";

const GAL_01 = process.env.PUBLIC_URL + "/img/gal-01.jpg";
const GAL_02 = process.env.PUBLIC_URL + "/img/gal-02.jpg";
const GAL_03 = process.env.PUBLIC_URL + "/img/gal-03.jpg";
const GAL_04 = process.env.PUBLIC_URL + "/img/gal-04.jpg";
const GAL_05 = process.env.PUBLIC_URL + "/img/gal-05.jpg";

const GAL_01_B = process.env.PUBLIC_URL + "/img/gal-01-b.jpg";
const GAL_02_B = process.env.PUBLIC_URL + "/img/gal-02-b.jpg";
const GAL_03_B = process.env.PUBLIC_URL + "/img/gal-03-b.jpg";

const GAL_01_C = process.env.PUBLIC_URL + "/img/gal-01-c.jpg";
const GAL_02_C = process.env.PUBLIC_URL + "/img/gal-02-c.jpg";
const GAL_03_C = process.env.PUBLIC_URL + "/img/gal-03-c.jpg";

const GAL_01_D = process.env.PUBLIC_URL + "/img/gal-01-d.jpg";

const GAL_01_E = process.env.PUBLIC_URL + "/img/gal-01-e.jpg";

const GAL_01_F = process.env.PUBLIC_URL + "/img/gal-01-f.jpg";


const FED_1 = process.env.PUBLIC_URL + "/img/fed-1.jpg";
const FED_2 = process.env.PUBLIC_URL + "/img/fed-2.jpg";
const FED_3 = process.env.PUBLIC_URL + "/img/fed-3.jpg";
const FED_4 = process.env.PUBLIC_URL + "/img/fed-4.jpg";
const FED_5 = process.env.PUBLIC_URL + "/img/fed-5.jpg";
const FED_6 = process.env.PUBLIC_URL + "/img/fed-6.jpg";
const FED_7 = process.env.PUBLIC_URL + "/img/fed-7.jpg";
const FED_8 = process.env.PUBLIC_URL + "/img/fed-8.jpg";
const FED_9 = process.env.PUBLIC_URL + "/img/fed-9.jpg";
const FED_10 = process.env.PUBLIC_URL + "/img/fed-10.jpg";
const FED_11 = process.env.PUBLIC_URL + "/img/fed-11.jpg";
const FED_12 = process.env.PUBLIC_URL + "/img/fed-12.jpg";
const FED_13 = process.env.PUBLIC_URL + "/img/fed-13.jpg";
const FED_14 = process.env.PUBLIC_URL + "/img/fed-14.jpg";
const FED_15 = process.env.PUBLIC_URL + "/img/fed-15.jpg";
const FED_16 = process.env.PUBLIC_URL + "/img/fed-16.jpg";
const FED_17 = process.env.PUBLIC_URL + "/img/fed-17.jpg";

const federalImages = [FED_1, FED_2, FED_3, FED_4, FED_5, FED_6, FED_7, FED_8, FED_9, FED_10, FED_11, FED_12, FED_13, FED_14, FED_15, FED_16, FED_17];

const GOLD = "#C9A84C";
const GOLD_LIGHT = "#D4B86A";
const GOLD_DIM = "#8B7635";
const BG_PRIMARY = "#0A0A0A";
const BG_CARD = "#141414";
const BG_CARD_HOVER = "#1A1A1A";
const BORDER = "#252525";
const TEXT_MUTED = "#999";

const galleryImages = [GAL_01, GAL_02, GAL_03, GAL_04, GAL_05, GAL_01_B, GAL_02_B, GAL_03_B, GAL_01_C, GAL_02_C, GAL_03_C, GAL_01_D, GAL_01_E, GAL_01_F];

export default function EstudioJuridico() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState(null);
  const [landingPage, setLandingPage] = useState(null);
  const [blogPost, setBlogPost] = useState(null);
  const [lpFaqOpen, setLpFaqOpen] = useState(null);
  const [faqOpen, setFaqOpen] = useState(null);
  const [formData, setFormData] = useState({ nombre: "", email: "", telefono: "", mensaje: "", area: "penal" });
  const [turnoData, setTurnoData] = useState({ nombre: "", telefono: "", fecha: "", hora: "", motivo: "" });
  const [causaQuery, setCausaQuery] = useState("");
  const [causaResult, setCausaResult] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [turnoSent, setTurnoSent] = useState(false);
  const sectionRefs = useRef({});

  const sections = [
    { id: "inicio", label: "Inicio", icon: HomeIcon },
    { id: "nosotros", label: "Quiénes Somos", icon: Users },
    { id: "areas", label: "Áreas", icon: Briefcase },
    { id: "federal", label: "Penal Federal", icon: Shield },
    { id: "servicios", label: "Servicios", icon: Shield },
    { id: "blog", label: "Novedades", icon: BookOpen },
    { id: "testimonios", label: "Testimonios", icon: Star },
    { id: "galeria", label: "Galería", icon: BookOpen },
    { id: "faq", label: "FAQ", icon: HelpCircle },
    { id: "contacto", label: "Contacto", icon: Phone },
  ];

  const scrollTo = (id) => {
    setMenuOpen(false);
    setActivePage(null);
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", id === "inicio" ? "/" : `/${id}`);
    }
  };

  useEffect(() => {
    const path = window.location.pathname.replace("/", "");
    const hash = window.location.hash.replace("#", "");
    const target = path || hash;
    if (target) {
      const timer = setTimeout(() => {
        const el = sectionRefs.current[target];
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            const newPath = entry.target.id === "inicio" ? "/" : `/${entry.target.id}`;
            if (window.location.pathname !== newPath) {
              window.history.replaceState(null, "", newPath);
            }
          }
        });
      },
      { threshold: 0.3 }
    );
    Object.values(sectionRefs.current).forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const areas = [
    { icon: Gavel, title: "Derecho Penal", desc: "Defensa penal integral en todas las etapas del proceso: investigación preliminar, instrucción, juicio oral y recursos ante Cámaras de Apelación y Tribunales de Casación. Tramitamos excarcelaciones urgentes, morigeraciones de prisión preventiva, juicios abreviados y suspensiones de juicio a prueba (probation). Atendemos causas por delitos contra la propiedad, contra las personas, delitos contra la integridad sexual, delitos económicos y crimen organizado. Abogados penalistas en Buenos Aires con defensa técnica personalizada." },
    { icon: Building, title: "Derecho Civil", desc: "Juicios por daños y perjuicios, responsabilidad civil contractual y extracontractual, cobro judicial de deudas, ejecuciones de sentencia y juicios ejecutivos. Desalojos, interdictos, acciones posesorias, sucesiones y declaratorias de herederos. Contratos de locación, compraventa, donaciones, usucapión y prescripción adquisitiva. Regularización dominial, escrituraciones y medidas cautelares como embargos, inhibiciones e intervenciones judiciales." },
    { icon: Heart, title: "Derecho de Familia", desc: "Divorcios contenciosos y de común acuerdo, fijación y modificación de cuota alimentaria, régimen de comunicación (visitas) y cuidado personal de hijos menores. Intervención en violencia familiar: medidas de protección, exclusión del hogar, prohibición de acercamiento y botón antipánico. Adopción, restitución internacional de menores, liquidación de sociedad conyugal y compensaciones económicas conforme al Código Civil y Comercial." },
    { icon: Users, title: "Derecho Laboral", desc: "Abogado por despido en Buenos Aires: asesoramos en despido con y sin causa, diferencias salariales, trabajo no registrado (trabajo en negro), registración deficiente e indemnizaciones por antigüedad, preaviso y vacaciones. Representación en audiencias SECLO, mediaciones laborales y juicios. Accidentes de trabajo, enfermedades profesionales, acoso laboral (mobbing) y reclamos por incapacidad ante Comisiones Médicas." },
    { icon: Landmark, title: "Derecho Inmobiliario", desc: "Usucapión (prescripción adquisitiva larga y corta), análisis de cadenas de titularidad, regularización dominial, escrituraciones, boletos de compraventa, constitución y ejecución de hipotecas, mensuras, subdivisiones, propiedad horizontal, conflictos entre consorcistas, desalojos y acciones reivindicatorias." },
    { icon: Shield, title: "Derecho Administrativo", desc: "Amparos individuales y colectivos, acciones de inconstitucionalidad, habeas data, recursos jerárquicos y de alzada, impugnación de actos administrativos, reclamos ante organismos públicos nacionales, provinciales y municipales. Asesoramiento en licitaciones públicas, contrataciones estatales, sumarios administrativos y procedimientos sancionatorios ante AFIP y entes reguladores." },
    { icon: Landmark, title: "Causas Federales", desc: "Abogado penalista federal en Argentina: defensa estratégica en causas de narcotráfico (Ley 23.737), contrabando (Código Aduanero), lavado de activos y dinero, evasión fiscal, trata de personas (Ley 26.364), delitos migratorios y delitos contra el orden constitucional. Actuamos ante Juzgados Federales, Cámaras y Tribunales Orales Federales en todas las jurisdicciones. Excarcelación urgente las 24 horas." },
    { icon: Shield, title: "ART - Riesgos del Trabajo", desc: "Reclamos por accidentes laborales in itinere y en el lugar de trabajo, enfermedades profesionales, incapacidades parciales y totales, gran invalidez. Determinación de porcentajes de incapacidad, reclamos ante Comisiones Médicas, recursos ante la Justicia, juicios por diferencias indemnizatorias y demandas contra empleadores por falta de cobertura." },
    { icon: Briefcase, title: "Accidentes de Tránsito", desc: "Representación legal integral a víctimas de accidentes de tránsito: lesiones leves, graves y gravísimas, incapacidad sobreviniente, daño moral, daño psicológico, lucro cesante, pérdida de chance y gastos de rehabilitación. Reclamo al seguro por accidente de tránsito, negociación extrajudicial con aseguradoras y litigación judicial por daños y perjuicios. Siniestros con automóviles, motos, bicicletas y peatones." },
    { icon: Building, title: "Sociedades", desc: "Constitución de SAS, SRL, SA y sociedades simples. Modificación de estatutos, asambleas ordinarias y extraordinarias, conflictos entre socios, exclusión de socios, disolución y liquidación de sociedades, responsabilidad de directores y administradores, intervención judicial, auditorías societarias e inscripciones ante IGJ y DPPJ." },
    { icon: Users, title: "Defensa al Consumidor", desc: "Protección integral de los derechos del consumidor y usuarios. Reclamos por productos defectuosos, incumplimiento de garantías, publicidad engañosa, prácticas abusivas y cláusulas abusivas. Acciones ante COPREC, mediaciones y denuncias ante autoridades de aplicación. Reclamos contra bancos, financieras, empresas de telecomunicaciones, prepagas y plataformas digitales. Daño punitivo y acciones colectivas de consumo." },
    { icon: Landmark, title: "Recobros Internacionales", desc: "Gestión y recupero de créditos y deudas a nivel internacional. Ejecución de sentencias extranjeras, exhortos internacionales, cartas rogatorias, cobro de obligaciones transfronterizas, coordinación con estudios jurídicos en el exterior, tratados de cooperación judicial y arbitraje comercial internacional." },
  ];

  const faqs = [
    { q: "¿Qué hago si un familiar fue detenido por la policía o una fuerza federal?", a: "Comuníquese de inmediato con un abogado penalista. El detenido tiene derecho a contar con asistencia letrada desde el primer momento. En nuestro estudio ofrecemos atención urgente para detenciones: evaluamos la situación, nos presentamos en la causa y gestionamos la excarcelación urgente o morigeración de la prisión preventiva lo antes posible." },
    { q: "¿Cuánto tarda una excarcelación?", a: "Una vez presentado el pedido de excarcelación, el juez tiene un plazo legal de 24 horas para resolverlo. Sin embargo, los tiempos reales pueden variar según la complejidad de la causa, el juzgado interviniente y la situación procesal del detenido. Un abogado penalista federal con experiencia en excarcelaciones puede agilizar significativamente el proceso." },
    { q: "¿Cuánto cuesta la primera consulta?", a: "La primera consulta tiene un costo accesible que se informa al momento de coordinar el turno. En casos de urgencia penal, como detenciones, la consulta puede realizarse de forma inmediata. Ofrecemos consultas presenciales en nuestro estudio en Av. Juan Domingo Perón 3274, Local 25, Los Polvorines, y también consultas por videollamada." },
    { q: "¿Atienden causas penales federales en todo el país?", a: "Sí. Nuestro estudio tiene experiencia en causas federales en distintas jurisdicciones de Argentina. Actuamos ante Juzgados Federales, Cámaras Federales y Tribunales Orales Federales en todo el territorio nacional, incluyendo causas por narcotráfico, contrabando, lavado de activos y otros delitos federales." },
    { q: "¿Qué es la suspensión de juicio a prueba (probation)?", a: "La probation es un instituto del derecho penal argentino que permite suspender el proceso penal bajo ciertas condiciones: realizar tareas comunitarias, no cometer nuevos delitos y reparar el daño. Si se cumplen todas las condiciones durante el plazo fijado, la causa se extingue sin condena. Es una herramienta útil para delitos con penas menores y requiere la intervención de un abogado penalista para negociar las condiciones más favorables." },
    { q: "Me despidieron del trabajo. ¿Qué derechos tengo?", a: "Si fue despedido sin justa causa, tiene derecho a cobrar indemnización por antigüedad, preaviso (si no se lo otorgaron), integración del mes de despido, vacaciones proporcionales y SAC proporcional. Si estaba trabajando en negro o con registración deficiente, las indemnizaciones pueden ser significativamente mayores. Es fundamental que consulte con un abogado laboral en Buenos Aires lo antes posible, ya que existen plazos legales para reclamar." },
    { q: "Tuve un accidente de tránsito. ¿Cómo reclamo al seguro?", a: "Lo primero es hacer la denuncia del siniestro ante la aseguradora del responsable dentro del plazo legal. Es recomendable reunir la mayor cantidad de pruebas posible: fotos del accidente, datos del otro vehículo, testigos y parte policial. Un abogado especializado en accidentes de tránsito se encarga del reclamo al seguro, la negociación con la aseguradora y, si no ofrece una indemnización justa, inicia las acciones judiciales correspondientes." },
    { q: "¿Ofrecen planes de pago para honorarios?", a: "Sí, trabajamos con planes de pago flexibles adaptados a la situación de cada cliente. Los honorarios se pactan de forma transparente al inicio de cada relación profesional." },
    { q: "¿Puedo hacer una consulta por videollamada?", a: "Sí, ofrecemos consultas por videollamada para quienes no puedan acercarse a nuestro estudio ubicado en Los Polvorines, Provincia de Buenos Aires. Puede coordinar su turno online o comunicándose por WhatsApp." },
  ];

  const testimonios = [
    { nombre: "María L.", texto: "Excelente atención y profesionalismo. Me acompañaron durante todo el proceso penal con dedicación y claridad.", rating: 5 },
    { nombre: "Carlos R.", texto: "Resolvieron mi caso civil de manera eficiente. Siempre estuvieron disponibles para responder mis dudas.", rating: 5 },
    { nombre: "Luciana G.", texto: "Los recomiendo para temas de familia. Muy humanos y comprometidos con la situación de cada cliente.", rating: 5 },
    { nombre: "Jorge M.", texto: "Profesionales serios y responsables. Mi caso laboral se resolvió favorablemente gracias a su intervención.", rating: 4 },
  ];

  const blogPosts = [
    { slug: "que-hacer-si-te-detienen", title: "¿Qué hacer si te detienen? Guía paso a paso", excerpt: "Conocé tus derechos ante una detención policial. Qué decir, qué no decir, y cuándo llamar a un abogado penalista.", date: "Octubre 2026", tag: "Penal", content: "Si te detienen, lo primero es mantener la calma. Tenés derecho a guardar silencio, a no declarar contra vos mismo y a contar con un abogado desde el primer momento. No firmes ningún documento sin que tu abogado lo revise. Contactá a un familiar o a tu abogado de confianza lo antes posible. En García Pozzaglio atendemos urgencias penales las 24 horas." },
    { slug: "como-reclamar-seguro-accidente-transito", title: "¿Cómo reclamar al seguro por un accidente de tránsito?", excerpt: "Guía completa para reclamar la indemnización que te corresponde después de un siniestro vial.", date: "Septiembre 2026", tag: "Accidentes", content: "Después de un accidente de tránsito, es fundamental: 1) Hacer la denuncia policial. 2) Tomar fotos del lugar y los vehículos. 3) Recopilar datos de testigos. 4) Denunciar el siniestro ante la aseguradora del responsable. 5) NO aceptar la primera oferta del seguro sin consultar con un abogado. Las aseguradoras suelen ofrecer montos muy inferiores a lo que realmente corresponde." },
    { slug: "mala-praxis-medica-como-reclamar", title: "Mala praxis médica: ¿cómo saber si tenés un caso?", excerpt: "Señales de negligencia médica y los pasos legales para reclamar una indemnización por mala praxis.", date: "Agosto 2026", tag: "Mala Praxis", content: "Existe mala praxis cuando un profesional de la salud no actuó con la diligencia que el caso requería, causando un daño que podría haberse evitado. Ejemplos: error de diagnóstico, negligencia quirúrgica, infecciones intrahospitalarias, falta de consentimiento informado. Para reclamar necesitás la historia clínica, estudios médicos y toda documentación. El plazo para reclamar es de 3 años." },
    { slug: "danos-perjuicios-que-puedo-reclamar", title: "Daños y perjuicios: ¿qué rubros puedo reclamar?", excerpt: "Todos los conceptos indemnizatorios que podés reclamar cuando sufrís un daño: moral, patrimonial, psicológico.", date: "Julio 2026", tag: "Daños", content: "Cuando sufrís un daño injusto, podés reclamar: daño patrimonial (gastos médicos, reparaciones), lucro cesante (lo que dejaste de ganar), daño moral (sufrimiento y angustia), daño psicológico, incapacidad sobreviniente y pérdida de chance. Un abogado especialista evalúa tu caso y cuantifica cada rubro para maximizar tu indemnización." },
    { slug: "juicio-por-jurados-provincia-buenos-aires", title: "Juicio por jurados en Provincia de Buenos Aires", excerpt: "Claves del procedimiento ante el Tribunal en lo Criminal bajo la ley de juicio por jurados y estrategias de defensa.", date: "Junio 2026", tag: "Penal", content: "El juicio por jurados en la Provincia de Buenos Aires se aplica a delitos con penas mayores a 15 años de prisión. Un jurado de 12 ciudadanos decide sobre la culpabilidad o inocencia del acusado. La estrategia de defensa requiere un enfoque diferente: la comunicación clara y la capacidad de persuasión son fundamentales." },
    { slug: "delitos-federales-diferencias-justicia-ordinaria", title: "Delitos federales: diferencias con la justicia ordinaria", excerpt: "Qué delitos son federales, ante qué tribunales se tramitan y por qué necesitás un abogado especializado.", date: "Mayo 2026", tag: "Federal", content: "Los delitos federales son aquellos que afectan intereses del Estado Nacional. Incluyen narcotráfico (Ley 23.737), contrabando, lavado de activos (Ley 25.246), evasión fiscal, trata de personas. Se investigan ante los Juzgados Federales y se juzgan ante los Tribunales Orales Federales. La defensa en esta jurisdicción requiere experiencia específica." },
    { slug: "excarcelacion-urgente-buenos-aires", title: "Excarcelación urgente: ¿cómo sacar a un familiar detenido?", excerpt: "Todo lo que necesitás saber sobre el trámite de excarcelación en provincia de Buenos Aires. Plazos, requisitos y cómo actuar rápido.", date: "Octubre 2026", tag: "Penal", content: "La excarcelación es el derecho del imputado a recuperar su libertad durante el proceso penal. En provincia de Buenos Aires está regulada por los artículos 169 y siguientes del Código Procesal Penal. El abogado defensor puede solicitarla ante el Juzgado de Garantías desde el momento de la detención. Los requisitos principales son: que el delito permita excarcelación según la escala penal, que no exista peligro de fuga ni entorpecimiento de la investigación, y que el imputado tenga arraigo demostrable. El trámite puede resolverse en 24 a 72 horas hábiles. En García Pozzaglio nos presentamos en la comisaría de inmediato, las 24 horas, los 365 días, y gestionamos la excarcelación en el menor tiempo posible. Llamanos al 11 3820-7360." },
    { slug: "accidente-moto-que-hacer", title: "Accidente de moto: tus derechos y cómo reclamar", excerpt: "Los motociclistas sufren las lesiones más graves en accidentes viales. Conocé qué podés reclamar y cómo obtener la indemnización máxima.", date: "Octubre 2026", tag: "Accidentes", content: "Los accidentes de moto representan una de las principales causas de lesiones graves en Argentina. Si sufriste un accidente en moto, tenés derecho a reclamar indemnización por: gastos médicos y de rehabilitación, lucro cesante (lo que dejás de ganar mientras te recuperás), daño moral, incapacidad sobreviniente si te quedaron secuelas, y daño estético. Es fundamental no aceptar la primera oferta de la aseguradora: suelen ofrecer entre un 30% y un 50% menos de lo que realmente corresponde. Conservá toda la documentación médica, hacé la denuncia policial, y consultá con un abogado especializado antes de firmar cualquier acuerdo. En nuestro estudio evaluamos tu caso sin cargo y te decimos cuánto podés reclamar." },
    { slug: "violencia-familiar-denuncia", title: "Violencia familiar: cómo denunciar y qué medidas podés pedir", excerpt: "Guía sobre denuncias por violencia doméstica, medidas de protección y exclusión del hogar en provincia de Buenos Aires.", date: "Octubre 2026", tag: "Penal", content: "La violencia familiar es un delito que puede denunciarse en la comisaría más cercana, en la Oficina de Violencia Doméstica (OVD) o directamente ante el juzgado de familia. Las medidas de protección que podés solicitar incluyen: exclusión del agresor del hogar, prohibición de acercamiento, restitución de pertenencias, y fijación provisoria de alimentos y custodia. En casos urgentes, el juez puede dictar estas medidas en el mismo día. Además de la vía civil (juzgado de familia), si hay lesiones podés iniciar la causa penal. Es importante contar con asesoramiento legal desde el primer momento para proteger tus derechos y los de tus hijos. Contactanos las 24 horas al 11 3820-7360." },
    { slug: "prescripcion-delitos-penales-argentina", title: "¿Cuándo prescribe un delito penal en Argentina?", excerpt: "Plazos de prescripción según el tipo de delito. Cuándo se puede extinguir la acción penal y qué la interrumpe.", date: "Octubre 2026", tag: "Penal", content: "La prescripción de la acción penal en Argentina está regulada por los artículos 59 y 62 del Código Penal. Los plazos dependen de la pena máxima del delito: para delitos con prisión perpetua no prescriben, con pena de más de 5 años prescriben a los 12 años, con pena entre 3 y 5 años a los 6 años, y con pena menor a los 2 años. La prescripción se interrumpe con la comisión de otro delito, el requerimiento de apertura del juicio, y ciertos actos procesales. También se suspende en casos de funcionarios públicos hasta que dejen el cargo. Es fundamental que tu abogado analice si la acción penal prescribió, ya que esto puede significar el cierre definitivo de la causa. Consultá con nuestro estudio para evaluar tu situación." },
    { slug: "indemnizacion-accidente-laboral", title: "Accidente laboral: ¿cuánto me corresponde de indemnización?", excerpt: "Tus derechos ante un accidente de trabajo. Qué cubre la ART, cuándo podés reclamar por la vía civil y cómo calcular la indemnización.", date: "Octubre 2026", tag: "Daños", content: "Si sufriste un accidente mientras trabajabas, tenés derecho a que la ART (Aseguradora de Riesgos del Trabajo) cubra tu atención médica, medicamentos, rehabilitación y una indemnización si te quedó alguna incapacidad. Si la ART no responde o te ofrece menos de lo que corresponde, podés reclamar ante las Comisiones Médicas o por vía judicial. Además, si el accidente se produjo por culpa del empleador (falta de elementos de seguridad, máquinas en mal estado, falta de capacitación), podés iniciar una demanda civil por daños y perjuicios que se suma a lo que pague la ART. Los rubros incluyen: daño físico, daño moral, lucro cesante y gastos médicos futuros. Contactanos para evaluar tu caso sin cargo." },
    { slug: "estafa-virtual-como-denunciar", title: "Estafa virtual: cómo denunciar y recuperar tu dinero", excerpt: "Phishing, hackeo de cuentas, compras fraudulentas. Pasos para denunciar una estafa por internet y las vías legales disponibles.", date: "Octubre 2026", tag: "Penal", content: "Las estafas virtuales crecieron exponencialmente en los últimos años. Si fuiste víctima de phishing, hackeo de home banking, compras fraudulentas o transferencias no autorizadas, actuá rápido: contactá a tu banco para bloquear la cuenta, hacé la denuncia en la comisaría o fiscalía más cercana, y conservá todas las capturas de pantalla, correos y mensajes como prueba. La estafa informática está tipificada en el artículo 173 inciso 16 del Código Penal con pena de 1 mes a 6 años de prisión. También podés reclamar al banco por la vía civil si hubo fallas en sus sistemas de seguridad. En nuestro estudio te asesoramos sobre la mejor estrategia para perseguir al estafador y recuperar tu dinero." }
  ];

  const handleConsultaSubmit = () => {
    if (formData.nombre && formData.email && formData.mensaje) {
      const areas = { penal: "Derecho Penal", civil: "Derecho Civil", familia: "Derecho de Familia", laboral: "Derecho Laboral", inmobiliario: "Derecho Inmobiliario", administrativo: "Derecho Administrativo" };
      const texto = `Hola, soy *${formData.nombre}*%0A📧 Email: ${formData.email}%0A📱 Tel: ${formData.telefono || "No indicado"}%0A⚖️ Área: ${areas[formData.area] || formData.area}%0A%0A📝 Consulta:%0A${formData.mensaje}`;
      if (window.gtag_report_conversion) window.gtag_report_conversion();
      window.open(`https://wa.me/5491138207360?text=${texto}`, "_blank");
      setFormSent(true);
      setTimeout(() => setFormSent(false), 4000);
      setFormData({ nombre: "", email: "", telefono: "", mensaje: "", area: "penal" });
    }
  };

  const handleTurnoSubmit = () => {
    if (turnoData.nombre && turnoData.telefono && turnoData.fecha) {
      const texto = `Hola, quiero solicitar un *turno*%0A%0A👤 Nombre: *${turnoData.nombre}*%0A📱 Teléfono: ${turnoData.telefono}%0A📅 Fecha preferida: ${turnoData.fecha}%0A🕐 Horario: ${turnoData.hora || "A confirmar"}%0A%0A📝 Motivo:%0A${turnoData.motivo || "A definir en la consulta"}`;
    if (window.gtag_report_conversion) window.gtag_report_conversion();      
    window.open(`https://wa.me/5491138207360?text=${texto}`, "_blank");
      setTurnoSent(true);
      setTimeout(() => setTurnoSent(false), 4000);
      setTurnoData({ nombre: "", telefono: "", fecha: "", hora: "", motivo: "" });
    }
  };

  const handleCausaSearch = () => {
    if (causaQuery.trim()) {
      setCausaResult({
        expediente: causaQuery,
        estado: "En trámite",
        juzgado: "Juzgado Civil y Comercial N°5 - La Matanza",
        ultimoMov: "15/07/2026 — Presentación de escrito contestación de demanda",
        proximo: "Audiencia preliminar — pendiente de fijación",
      });
    }
  };

  const inputStyle = {
    width: "100%", padding: "12px 16px", background: BG_PRIMARY, border: `1px solid ${BORDER}`,
    borderRadius: 8, color: "#fff", fontSize: 15, outline: "none", transition: "border-color 0.2s",
  };

  const btnGold = {
    background: `linear-gradient(135deg, ${GOLD}, ${GOLD_DIM})`, color: BG_PRIMARY,
    padding: "12px 28px", borderRadius: 8, border: "none", cursor: "pointer",
    fontWeight: 700, fontSize: 15, display: "inline-flex", alignItems: "center", gap: 8,
    transition: "transform 0.2s, box-shadow 0.2s",
  };


  // ═══ LANDING PAGES DATA ═══
  const landingPages = {
    "abogado-penal": {
      metaTitle: "Abogado Penalista en Buenos Aires | Estudio García Pozzaglio",
      metaDesc: "Abogado penalista en Buenos Aires. Excarcelaciones urgentes 24hs, defensa en juicio oral, delitos complejos. Consulta inmediata por WhatsApp.",
      heroTitle: "Abogado Penalista en",
      heroHighlight: "Buenos Aires",
      heroDesc: "Defensa penal integral: excarcelaciones urgentes, delitos contra las personas, robos, estafas, juicio por jurados. Más de 15 años de experiencia en Justicia Penal Provincial, Nacional y Federal.",
      urgentText: "¿Tenés un familiar detenido? Llamanos ahora — atención 24/7",
      whatsappMsg: "Hola, necesito un abogado penalista urgente",
      bullets: [
        "Excarcelaciones y morigeraciones urgentes las 24 horas",
        "Defensa en juicio oral y juicio por jurados",
        "Delitos contra las personas, robos, hurtos y estafas",
        "Delitos contra la propiedad y orden público",
        "Amenazas, lesiones, violencia de género",
        "Suspensión del juicio a prueba (probation)"
      ],
      faqs: [
        { q: "¿Cuánto tarda una excarcelación?", a: "Iniciamos el trámite de inmediato. Según el caso, puede resolverse en 24 a 72 horas hábiles. Trabajamos las 24 horas para lograr la libertad lo antes posible." },
        { q: "¿Puedo elegir mi propio abogado defensor?", a: "Sí, es tu derecho constitucional. Podés designar un abogado de confianza en cualquier momento del proceso penal, incluso si ya tenés un defensor oficial." },
        { q: "¿Qué hago si la policía me detiene?", a: "No declares sin tu abogado presente. Tenés derecho a guardar silencio y a una llamada telefónica. Contactanos de inmediato al 11 3820-7360." }
      ]
    },
    "abogado-accidentes-transito": {
      metaTitle: "Abogado Accidentes de Tránsito Buenos Aires | García Pozzaglio",
      metaDesc: "Abogado especialista en accidentes de tránsito en Buenos Aires. Reclamamos al seguro la indemnización que te corresponde. Consulta gratis.",
      heroTitle: "Abogado de Accidentes de Tránsito en",
      heroHighlight: "Buenos Aires",
      heroDesc: "Reclamamos al seguro la máxima indemnización por tu accidente. No aceptes la primera oferta: nosotros negociamos por vos y, si es necesario, litigamos hasta obtener lo justo.",
      urgentText: "¿Tuviste un accidente? No firmes nada sin consultar antes con un abogado",
      whatsappMsg: "Hola, tuve un accidente de tránsito y necesito asesoramiento",
      bullets: [
        "Reclamo integral contra la aseguradora del responsable",
        "Accidentes con lesiones graves e incapacidad",
        "Atropello de peatones y ciclistas",
        "Choques en cadena y accidentes en ruta",
        "Accidentes de moto y transporte público",
        "Cobro de indemnización por daño moral y lucro cesante"
      ],
      faqs: [
        { q: "¿Cuánto puedo cobrar por mi accidente?", a: "El monto depende de la gravedad de las lesiones, los gastos médicos, el lucro cesante y el daño moral. Evaluamos tu caso sin cargo y te decimos cuánto podés reclamar." },
        { q: "¿Qué plazo tengo para reclamar?", a: "El plazo de prescripción es de 3 años desde el accidente. Sin embargo, te recomendamos iniciar el reclamo lo antes posible para preservar la prueba." },
        { q: "¿Puedo reclamar si el otro conductor no tiene seguro?", a: "Sí, podés reclamar directamente al conductor responsable. También podés usar tu propio seguro si incluye cobertura de terceros no asegurados." }
      ]
    },
    "abogado-mala-praxis": {
      metaTitle: "Abogado Mala Praxis Médica Buenos Aires | García Pozzaglio",
      metaDesc: "Abogado especialista en mala praxis médica en Buenos Aires. Demandas por negligencia médica, errores de diagnóstico, cirugías fallidas. Consulta gratis.",
      heroTitle: "Abogado de Mala Praxis Médica en",
      heroHighlight: "Buenos Aires",
      heroDesc: "Demandamos por negligencia médica: errores de diagnóstico, cirugías fallidas, infecciones intrahospitalarias, falta de consentimiento informado. Defendemos tus derechos como paciente.",
      urgentText: "¿Fuiste víctima de negligencia médica? Consultá sin compromiso",
      whatsappMsg: "Hola, creo que fui víctima de mala praxis médica",
      bullets: [
        "Error de diagnóstico o diagnóstico tardío",
        "Negligencia quirúrgica y cirugías fallidas",
        "Infecciones intrahospitalarias",
        "Falta de consentimiento informado",
        "Mala praxis odontológica y obstétrica",
        "Responsabilidad de clínicas, sanatorios y obras sociales"
      ],
      faqs: [
        { q: "¿Cómo sé si tengo un caso de mala praxis?", a: "Si un profesional de la salud no actuó con la diligencia debida y eso te causó un daño evitable, tenés un caso. Evaluamos tu situación sin cargo con nuestro equipo." },
        { q: "¿Qué documentación necesito?", a: "Historia clínica, estudios médicos, recetas, informes y cualquier documento relacionado con tu atención. Te ayudamos a solicitarlos si no los tenés." },
        { q: "¿Cuánto demora un juicio por mala praxis?", a: "Puede durar entre 2 y 4 años, pero muchos casos se resuelven en mediación. Buscamos la resolución más rápida y favorable para vos." }
      ]
    },
    "abogado-danos-perjuicios": {
      metaTitle: "Abogado Daños y Perjuicios Buenos Aires | García Pozzaglio",
      metaDesc: "Abogado especialista en daños y perjuicios en Buenos Aires. Indemnizaciones por accidentes, negligencia, daño moral. Consulta sin cargo.",
      heroTitle: "Abogado de Daños y Perjuicios en",
      heroHighlight: "Buenos Aires",
      heroDesc: "Reclamamos la indemnización integral que te corresponde: daño patrimonial, moral, psicológico, lucro cesante e incapacidad sobreviniente. Maximizamos tu compensación.",
      urgentText: "¿Sufriste un daño injusto? Tenés derecho a ser indemnizado",
      whatsappMsg: "Hola, necesito reclamar daños y perjuicios",
      bullets: [
        "Daño patrimonial y extrapatrimonial",
        "Daño moral y daño psicológico",
        "Lucro cesante y pérdida de chance",
        "Incapacidad sobreviniente",
        "Daños por productos defectuosos",
        "Responsabilidad civil contractual y extracontractual"
      ],
      faqs: [
        { q: "¿Qué rubros puedo reclamar?", a: "Daño emergente (gastos), lucro cesante (lo que dejaste de ganar), daño moral, daño psicológico, incapacidad sobreviniente y pérdida de chance, entre otros." },
        { q: "¿Necesito ir a mediación antes de un juicio?", a: "Sí, en la mayoría de los casos la mediación previa es obligatoria. Muchos casos se resuelven en esta etapa, logrando un acuerdo favorable sin juicio." },
        { q: "¿Cuánto puede tardar en cobrar?", a: "Si se llega a un acuerdo en mediación, puede ser en meses. Un juicio puede durar entre 2 y 4 años. Trabajamos para obtener el mejor resultado en el menor tiempo." }
      ]
    },
    "abogado-delitos-federales": {
      metaTitle: "Abogado Penal Federal Buenos Aires | García Pozzaglio",
      metaDesc: "Abogado penalista federal en Buenos Aires. Defensa en narcotráfico, lavado de activos, contrabando, evasión fiscal. Atención urgente 24hs.",
      heroTitle: "Abogado de Delitos Federales en",
      heroHighlight: "Argentina",
      heroDesc: "Defensa especializada en fuero federal: narcotráfico (Ley 23.737), lavado de activos, contrabando, evasión fiscal, trata de personas. Actuamos en todo el país ante Juzgados y Tribunales Federales.",
      urgentText: "¿Investigado o detenido por un delito federal? Llamanos ahora",
      whatsappMsg: "Hola, necesito un abogado para un caso en fuero federal",
      bullets: [
        "Narcotráfico y tenencia de estupefacientes (Ley 23.737)",
        "Lavado de activos y dinero (Ley 25.246)",
        "Contrabando y delitos aduaneros",
        "Evasión fiscal y delitos tributarios",
        "Trata de personas (Ley 26.364)",
        "Delitos contra el orden constitucional"
      ],
      faqs: [
        { q: "¿Qué diferencia hay entre justicia federal y ordinaria?", a: "La justicia federal interviene en delitos que afectan intereses del Estado Nacional o que involucran distintas jurisdicciones. Los procedimientos y plazos son diferentes." },
        { q: "¿Pueden allanar mi domicilio sin orden judicial?", a: "Solo en casos de flagrancia o peligro inminente. Un allanamiento sin orden válida puede ser declarado nulo y toda la prueba obtenida queda invalidada." },
        { q: "¿Qué hago si me citan a declarar como imputado?", a: "No declares sin abogado. Tenés derecho a negarte a declarar sin que eso sea usado en tu contra. Contactanos antes de la declaración." }
      ]
    },
    // ── LANDING PAGES POR ZONA GEOGRÁFICA ──
    "abogado-penal-san-martin": {
      metaTitle: "Abogado Penalista en San Martín | Estudio García Pozzaglio",
      metaDesc: "Abogado penalista en San Martín, Buenos Aires. Excarcelaciones urgentes 24hs, defensa penal en Departamento Judicial San Martín. Consulta inmediata.",
      heroTitle: "Abogado Penalista en",
      heroHighlight: "San Martín",
      heroDesc: "Defensa penal en el Departamento Judicial San Martín. Excarcelaciones urgentes, juicio oral, delitos complejos. Atención inmediata en San Martín, Villa Ballester, José León Suárez, San Andrés y alrededores.",
      urgentText: "¿Familiar detenido en la zona de San Martín? Llamanos ahora — 24/7",
      whatsappMsg: "Hola, necesito un abogado penalista en San Martín",
      bullets: [
        "Excarcelaciones urgentes en comisarías de San Martín",
        "Defensa ante Juzgados de Garantías del Dpto. Judicial San Martín",
        "Juicio oral ante Tribunales en lo Criminal de San Martín",
        "Juicio por jurados (Ley 14.543)",
        "Delitos contra las personas, robos, hurtos y estafas",
        "Suspensión del juicio a prueba (probation)"
      ],
      faqs: [
        { q: "¿Dónde quedan los tribunales de San Martín?", a: "Los tribunales del Departamento Judicial San Martín están ubicados en Av. 101 N° 2635, General San Martín. Atendemos casos en todo el departamento judicial." },
        { q: "¿Atienden en comisarías de la zona?", a: "Sí, nos presentamos en cualquier comisaría de San Martín, Villa Ballester, José León Suárez, San Andrés y localidades cercanas. Atención 24 horas." },
        { q: "¿Cuánto cobran la consulta?", a: "La primera consulta es sin cargo. Evaluamos tu caso y te explicamos las opciones legales sin compromiso." }
      ]
    },
    "abogado-penal-la-matanza": {
      metaTitle: "Abogado Penalista en La Matanza | Estudio García Pozzaglio",
      metaDesc: "Abogado penalista en La Matanza, Buenos Aires. Defensa penal, excarcelaciones urgentes, juicio por jurados. Atención 24hs en Ramos Mejía, San Justo, Isidro Casanova.",
      heroTitle: "Abogado Penalista en",
      heroHighlight: "La Matanza",
      heroDesc: "Defensa penal integral en el Departamento Judicial La Matanza. Excarcelaciones, juicio por jurados, delitos graves. Atención inmediata en Ramos Mejía, San Justo, Isidro Casanova, González Catán y toda La Matanza.",
      urgentText: "¿Detenido en La Matanza? Nos presentamos en la comisaría — 24/7",
      whatsappMsg: "Hola, necesito un abogado penalista en La Matanza",
      bullets: [
        "Excarcelaciones urgentes en comisarías de La Matanza",
        "Defensa ante Juzgados de Garantías de La Matanza",
        "Juicio por jurados ante TOC La Matanza",
        "Homicidios, robos agravados, delitos sexuales",
        "Amenazas, lesiones, violencia familiar",
        "Asistencia en la UFI de turno las 24 horas"
      ],
      faqs: [
        { q: "¿Cubren todas las localidades de La Matanza?", a: "Sí, atendemos en todo el partido: Ramos Mejía, San Justo, Isidro Casanova, González Catán, Laferrere, Villa Luzuriaga, Tapiales, Ciudad Evita y más." },
        { q: "¿Tienen experiencia en juicio por jurados?", a: "Sí, contamos con amplia experiencia en juicios por jurados (Ley 14.543) ante los Tribunales en lo Criminal de La Matanza." },
        { q: "¿Se puede pedir la excarcelación el mismo día?", a: "Sí, iniciamos el trámite de inmediato. Según las circunstancias del caso, puede resolverse en 24 a 72 horas hábiles." }
      ]
    },
    "abogado-accidentes-transito-zona-norte": {
      metaTitle: "Abogado Accidentes de Tránsito Zona Norte | García Pozzaglio",
      metaDesc: "Abogado de accidentes de tránsito en zona norte de Buenos Aires. Reclamos al seguro, indemnizaciones por accidentes en Panamericana, ruta 8, ruta 9. Consulta gratis.",
      heroTitle: "Abogado de Accidentes de Tránsito en",
      heroHighlight: "Zona Norte",
      heroDesc: "Especialistas en reclamos por accidentes de tránsito en zona norte: Panamericana, Ruta 8, Ruta 9, Camino del Buen Ayre. Reclamamos al seguro la indemnización máxima por tu accidente en San Martín, Tigre, San Isidro, Vicente López y alrededores.",
      urgentText: "¿Tuviste un accidente en zona norte? No firmes nada — consultá primero",
      whatsappMsg: "Hola, tuve un accidente de tránsito en zona norte y necesito asesoramiento",
      bullets: [
        "Accidentes en Panamericana, Ruta 8 y Ruta 9",
        "Reclamo integral contra la aseguradora",
        "Atropello de peatones y ciclistas",
        "Accidentes de moto y colectivo",
        "Lesiones graves e incapacidad sobreviniente",
        "Cobro de indemnización por daño moral y lucro cesante"
      ],
      faqs: [
        { q: "¿Puedo reclamar si el accidente fue en la Panamericana?", a: "Sí, reclamamos por accidentes en cualquier vía de zona norte. En autopistas como Panamericana también puede haber responsabilidad del concesionario vial." },
        { q: "¿Cuánto tarda el cobro de la indemnización?", a: "Si se llega a un acuerdo extrajudicial, puede ser en 3 a 6 meses. Un juicio puede durar 2 a 4 años. Siempre buscamos la vía más rápida." },
        { q: "¿Qué hago justo después del accidente?", a: "Hacé la denuncia policial, tomá fotos, recopiá datos de testigos y del otro conductor. No firmes nada de la aseguradora sin consultarnos antes." }
      ]
    },
    "abogado-accidentes-transito-la-matanza": {
      metaTitle: "Abogado Accidentes de Tránsito La Matanza | García Pozzaglio",
      metaDesc: "Abogado de accidentes de tránsito en La Matanza. Reclamos al seguro por accidentes en Camino de Cintura, Ruta 3, Ruta 21. Indemnización máxima. Consulta gratis.",
      heroTitle: "Abogado de Accidentes de Tránsito en",
      heroHighlight: "La Matanza",
      heroDesc: "Reclamamos la indemnización máxima por accidentes en La Matanza: Camino de Cintura, Ruta 3, Ruta 21, Av. Crovara. Atendemos en Ramos Mejía, San Justo, Isidro Casanova, González Catán y todo el partido.",
      urgentText: "¿Accidente en La Matanza? No aceptes la oferta del seguro sin consultar",
      whatsappMsg: "Hola, tuve un accidente de tránsito en La Matanza",
      bullets: [
        "Accidentes en Camino de Cintura, Ruta 3 y Ruta 21",
        "Reclamo contra la aseguradora del responsable",
        "Accidentes con lesiones graves e incapacidad",
        "Atropello de peatones en zonas urbanas",
        "Accidentes de moto y transporte público",
        "Daño moral, lucro cesante e incapacidad"
      ],
      faqs: [
        { q: "¿Cuánto puedo cobrar por un accidente en La Matanza?", a: "Depende de la gravedad de las lesiones, gastos médicos, lucro cesante y daño moral. Evaluamos tu caso sin cargo y te decimos cuánto podés reclamar." },
        { q: "¿Qué pasa si el responsable se dio a la fuga?", a: "Podés iniciar el reclamo igualmente. Si se identifica al responsable, se reclama a su seguro. Si no, hay otras vías legales que podemos evaluar." },
        { q: "¿Atienden accidentes de moto?", a: "Sí, los accidentes de moto suelen tener lesiones más graves y por lo tanto indemnizaciones más altas. Tenemos amplia experiencia en estos casos." }
      ]
    },
    "abogado-penal-tigre": {
      metaTitle: "Abogado Penalista en Tigre | Estudio García Pozzaglio",
      metaDesc: "Abogado penalista en Tigre, Buenos Aires. Defensa penal, excarcelaciones urgentes 24hs. Atención en Tigre, Don Torcuato, Pacheco y zona norte.",
      heroTitle: "Abogado Penalista en",
      heroHighlight: "Tigre",
      heroDesc: "Defensa penal en la jurisdicción de Tigre. Excarcelaciones urgentes, delitos náuticos, robos, estafas. Atención inmediata en Tigre centro, Don Torcuato, General Pacheco, El Talar y alrededores.",
      urgentText: "¿Detenido en la zona de Tigre? Llamanos ahora — atención 24/7",
      whatsappMsg: "Hola, necesito un abogado penalista en Tigre",
      bullets: [
        "Excarcelaciones urgentes en comisarías de Tigre",
        "Defensa en Juzgados de Garantías de San Isidro (jurisdicción Tigre)",
        "Delitos náuticos y en zona de islas",
        "Robos, hurtos, estafas y amenazas",
        "Violencia familiar y de género",
        "Suspensión del juicio a prueba"
      ],
      faqs: [
        { q: "¿Los casos de Tigre se tramitan en San Isidro?", a: "Sí, Tigre pertenece al Departamento Judicial San Isidro. Los casos penales se tramitan ante los juzgados de garantías y tribunales de esa jurisdicción." },
        { q: "¿Atienden casos de delitos náuticos?", a: "Sí, tenemos experiencia en casos vinculados a la zona de islas y el río. Estos casos pueden ser de jurisdicción provincial o federal según las circunstancias." },
        { q: "¿Pueden ir a la comisaría en horario nocturno?", a: "Sí, atendemos urgencias las 24 horas, los 365 días. Nos presentamos en la comisaría donde esté detenida la persona." }
      ]
    },
    "abogado-danos-perjuicios-zona-norte": {
      metaTitle: "Abogado Daños y Perjuicios Zona Norte | García Pozzaglio",
      metaDesc: "Abogado de daños y perjuicios en zona norte de Buenos Aires. Indemnizaciones por accidentes, negligencia, mala praxis. Consulta sin cargo.",
      heroTitle: "Abogado de Daños y Perjuicios en",
      heroHighlight: "Zona Norte",
      heroDesc: "Reclamamos indemnizaciones por daños y perjuicios en zona norte de Buenos Aires. Accidentes, negligencia médica, productos defectuosos, daño moral. Atención en San Martín, San Isidro, Tigre, Vicente López, Malvinas Argentinas.",
      urgentText: "¿Sufriste un daño injusto en zona norte? Tenés derecho a ser indemnizado",
      whatsappMsg: "Hola, necesito reclamar daños y perjuicios en zona norte",
      bullets: [
        "Daño patrimonial y extrapatrimonial",
        "Daño moral y daño psicológico",
        "Lucro cesante y pérdida de chance",
        "Incapacidad sobreviniente",
        "Responsabilidad civil por accidentes",
        "Daños por productos y servicios defectuosos"
      ],
      faqs: [
        { q: "¿Dónde se presenta la demanda?", a: "Generalmente en el juzgado civil del lugar donde ocurrió el hecho o donde tiene domicilio el demandado. Te asesoramos sobre la mejor estrategia." },
        { q: "¿Cuánto cuesta iniciar un reclamo?", a: "La primera consulta es sin cargo. Evaluamos tu caso y te explicamos los costos y las posibilidades de éxito antes de avanzar." },
        { q: "¿Puedo reclamar daño moral además del patrimonial?", a: "Sí, el daño moral es un rubro indemnizatorio autónomo. Comprende el sufrimiento, angustia y afectación emocional causada por el hecho dañoso." }
      ]
    }
  };


  
  // ═══ LANDING & BLOG ROUTING ═══
  useEffect(() => {
    const path = window.location.pathname;
    // Landing pages
    Object.keys(landingPages).forEach(slug => {
      if (path === "/" + slug || path === "/" + slug + "/") {
        setLandingPage(slug);
        document.title = landingPages[slug].metaTitle;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute("content", landingPages[slug].metaDesc);
      }
    });
    // Blog posts
    if (path.startsWith("/blog/")) {
      const slug = path.replace("/blog/", "").replace(/\/$/, "");
      setBlogPost(slug);
    }
  }, []);

  // ═══ BLOG POST PAGE ═══
  if (blogPost) {
    const post = blogPosts.find(p => p.slug === blogPost);
    if (post) {
      return (
        <div style={{ background: BG_PRIMARY, minHeight: "100vh", color: "#fff", fontFamily: "'Georgia', 'Times New Roman', serif" }}>
          <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${BORDER}`, padding: "16px 24px", display: "flex", alignItems: "center", gap: 16 }}>
            <button onClick={() => { setBlogPost(null); window.history.pushState(null, "", "/"); document.title = "Abogados en Buenos Aires | Estudio García Pozzaglio"; }}
              style={{ background: "none", border: "none", color: GOLD, cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", gap: 6, fontFamily: "system-ui, sans-serif" }}>← Volver al sitio</button>
          </div>
          <article style={{ maxWidth: 700, margin: "0 auto", padding: "60px 24px" }}>
            <span style={{ background: "rgba(201,168,76,0.12)", color: GOLD, padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, fontFamily: "system-ui, sans-serif" }}>{post.tag}</span>
            <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, color: "#fff", margin: "20px 0", lineHeight: 1.3, fontFamily: "system-ui, sans-serif" }}>{post.title}</h1>
            <p style={{ color: TEXT_MUTED, fontSize: 13, marginBottom: 32, fontFamily: "system-ui, sans-serif" }}>{post.date} — Estudio García Pozzaglio</p>
            <div style={{ color: "#ccc", fontSize: 16, lineHeight: 1.9, fontFamily: "system-ui, sans-serif" }}>{post.content}</div>
            <div style={{ marginTop: 48, padding: 32, background: BG_CARD, borderRadius: 12, border: `1px solid ${BORDER}`, textAlign: "center" }}>
              <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, margin: "0 0 12px", fontFamily: "system-ui, sans-serif" }}>¿Necesitás asesoramiento sobre este tema?</h3>
              <p style={{ color: TEXT_MUTED, fontSize: 14, marginBottom: 20, fontFamily: "system-ui, sans-serif" }}>Consultá sin compromiso con nuestro equipo de abogados</p>
              <a href="https://wa.me/5491138207360?text=Hola%2C%20leí%20su%20artículo%20y%20necesito%20asesoramiento" target="_blank" rel="noopener noreferrer"
                onClick={() => { if (window.gtag_report_conversion) window.gtag_report_conversion(); }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#25D366", color: "#fff", padding: "14px 28px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>
                Consultar por WhatsApp
              </a>
            </div>
          </article>
        </div>
      );
    }
  }

  // ═══ LANDING PAGE RENDER ═══
  if (landingPage && landingPages[landingPage]) {
    const lp = landingPages[landingPage];
    return (
      <div style={{ background: BG_PRIMARY, minHeight: "100vh", color: "#fff", fontFamily: "'Georgia', 'Times New Roman', serif" }}>
        <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${BORDER}`, padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={() => { setLandingPage(null); window.history.pushState(null, "", "/"); }}
            style={{ background: "none", border: "none", color: GOLD, cursor: "pointer", fontSize: 14, fontFamily: "system-ui, sans-serif" }}>← Volver al sitio</button>
          <a href="tel:+5491138207360" style={{ color: GOLD, textDecoration: "none", fontSize: 14, fontFamily: "system-ui, sans-serif", display: "flex", alignItems: "center", gap: 6 }}>
            <Phone size={14} /> 11 3820-7360
          </a>
        </div>

        <div style={{ background: "linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)", padding: "10px 24px", textAlign: "center" }}>
          <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, margin: 0, fontFamily: "system-ui, sans-serif" }}>⚠️ {lp.urgentText}</p>
        </div>

        <section style={{ padding: "80px 24px", textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 700, color: "#fff", margin: "0 0 24px", lineHeight: 1.3, fontFamily: "system-ui, sans-serif" }}>
            {lp.heroTitle} <span style={{ color: GOLD }}>{lp.heroHighlight}</span>
          </h1>
          <p style={{ color: "#ccc", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.8, margin: "0 0 36px", fontFamily: "system-ui, sans-serif" }}>{lp.heroDesc}</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`https://wa.me/5491138207360?text=${encodeURIComponent(lp.whatsappMsg)}`} target="_blank" rel="noopener noreferrer"
              onClick={() => { if (window.gtag_report_conversion) window.gtag_report_conversion(); }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#25D366", color: "#fff", padding: "16px 32px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 16, fontFamily: "system-ui, sans-serif" }}>
              Consultá por WhatsApp
            </a>
            <a href="tel:+5491138207360" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: GOLD, color: BG_PRIMARY, padding: "16px 32px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 16, fontFamily: "system-ui, sans-serif" }}>
              <Phone size={16} /> Llamar ahora
            </a>
          </div>
        </section>

        <section style={{ padding: "60px 24px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 32, textAlign: "center", fontFamily: "system-ui, sans-serif" }}>¿Qué hacemos por vos?</h2>
          <div style={{ display: "grid", gap: 16 }}>
            {lp.bullets.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: 20, background: BG_CARD, borderRadius: 10, border: `1px solid ${BORDER}` }}>
                <CheckCircle size={20} color={GOLD} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ color: "#ccc", fontSize: 15, lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>{b}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "60px 24px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 32, textAlign: "center", fontFamily: "system-ui, sans-serif" }}>Preguntas Frecuentes</h2>
          {lp.faqs.map((faq, i) => (
            <div key={i} style={{ marginBottom: 12, background: BG_CARD, borderRadius: 10, border: `1px solid ${BORDER}`, overflow: "hidden" }}>
              <button onClick={() => setLpFaqOpen(lpFaqOpen === i ? null : i)}
                style={{ width: "100%", padding: "18px 20px", background: "none", border: "none", color: "#fff", fontSize: 15, fontWeight: 600, textAlign: "left", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "system-ui, sans-serif" }}>
                {faq.q}
                {lpFaqOpen === i ? <ChevronUp size={18} color={GOLD} /> : <ChevronDown size={18} color={GOLD} />}
              </button>
              {lpFaqOpen === i && (
                <div style={{ padding: "0 20px 18px", color: TEXT_MUTED, fontSize: 14, lineHeight: 1.7, fontFamily: "system-ui, sans-serif" }}>{faq.a}</div>
              )}
            </div>
          ))}
        </section>

        <section style={{ padding: "60px 24px", textAlign: "center", background: BG_CARD }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: "#fff", margin: "0 0 16px", fontFamily: "system-ui, sans-serif" }}>¿Listo para resolver tu caso?</h2>
          <p style={{ color: TEXT_MUTED, fontSize: 15, marginBottom: 28, fontFamily: "system-ui, sans-serif" }}>Consulta inicial sin cargo. Respondemos en minutos.</p>
          <a href={`https://wa.me/5491138207360?text=${encodeURIComponent(lp.whatsappMsg)}`} target="_blank" rel="noopener noreferrer"
            onClick={() => { if (window.gtag_report_conversion) window.gtag_report_conversion(); }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#25D366", color: "#fff", padding: "16px 36px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 16, fontFamily: "system-ui, sans-serif" }}>
            Escribinos por WhatsApp
          </a>
        </section>

        <footer style={{ padding: "40px 24px", textAlign: "center", borderTop: `1px solid ${BORDER}` }}>
          <p style={{ color: TEXT_MUTED, fontSize: 13, fontFamily: "system-ui, sans-serif" }}>© 2026 Estudio Jurídico García Pozzaglio — Av. Juan Domingo Perón 3274, Local 25 — Los Polvorines, Buenos Aires</p>
        </footer>

        <a href={`https://wa.me/5491138207360?text=${encodeURIComponent(lp.whatsappMsg)}`} target="_blank" rel="noopener noreferrer"
          style={{ position: "fixed", bottom: 24, right: 24, zIndex: 100, display: "flex", alignItems: "center", gap: 10, background: "#25D366", padding: "14px 22px", borderRadius: 50, boxShadow: "0 4px 20px rgba(37,211,102,0.5)", textDecoration: "none", animation: "pulse-wa 2s infinite" }}>
          <svg viewBox="0 0 32 32" width="24" height="24" fill="#fff"><path d="M16.004 2.667A13.28 13.28 0 0 0 2.667 15.924a13.17 13.17 0 0 0 1.795 6.65L2.667 29.333l7.003-1.835A13.28 13.28 0 0 0 16.004 29.2c7.352 0 13.33-5.97 13.33-13.276 0-7.307-5.978-13.257-13.33-13.257Z"/></svg>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>Consultá ahora</span>
        </a>
      </div>
    );
  }

  // Subpages for interactive services
  if (activePage) {
    return (
      <div style={{ background: BG_PRIMARY, minHeight: "100vh", color: "#fff", fontFamily: "'Georgia', 'Times New Roman', serif" }}>
        {/* Top bar */}
        <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${BORDER}`, padding: "16px 24px", display: "flex", alignItems: "center", gap: 16 }}>
          <button onClick={() => setActivePage(null)} style={{ background: "none", border: "none", color: GOLD, cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
            ← Volver al sitio
          </button>
          <span style={{ color: GOLD, fontWeight: 700, fontSize: 18 }}>
            {activePage === "consulta" && "Formulario de Consulta"}
            {activePage === "turnos" && "Agenda de Turnos"}
            {activePage === "seguimiento" && "Seguimiento de Causas"}
          </span>
        </div>

        <div style={{ maxWidth: 600, margin: "0 auto", padding: "40px 20px" }}>
          {activePage === "consulta" && (
            <div>
              <p style={{ color: TEXT_MUTED, marginBottom: 32, lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>
                Completá el formulario y nos pondremos en contacto a la brevedad para coordinar una consulta.
              </p>
              {formSent && (
                <div style={{ background: "#0a2a0a", border: "1px solid #1a4a1a", borderRadius: 8, padding: 16, marginBottom: 24, display: "flex", alignItems: "center", gap: 10, fontFamily: "system-ui, sans-serif" }}>
                  <CheckCircle size={20} color="#4ade80" /> <span style={{ color: "#4ade80" }}>Consulta enviada correctamente. Nos comunicaremos pronto.</span>
                </div>
              )}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <label style={{ color: GOLD, fontSize: 13, marginBottom: 6, display: "block", fontFamily: "system-ui, sans-serif" }}>Nombre completo *</label>
                  <input style={inputStyle} value={formData.nombre} onChange={e => setFormData({...formData, nombre: e.target.value})} placeholder="Juan Pérez" />
                </div>
                <div>
                  <label style={{ color: GOLD, fontSize: 13, marginBottom: 6, display: "block", fontFamily: "system-ui, sans-serif" }}>Email *</label>
                  <input style={inputStyle} type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="ejemplo@mail.com" />
                </div>
                <div>
                  <label style={{ color: GOLD, fontSize: 13, marginBottom: 6, display: "block", fontFamily: "system-ui, sans-serif" }}>Teléfono</label>
                  <input style={inputStyle} value={formData.telefono} onChange={e => setFormData({...formData, telefono: e.target.value})} placeholder="11-XXXX-XXXX" />
                </div>
                <div>
                  <label style={{ color: GOLD, fontSize: 13, marginBottom: 6, display: "block", fontFamily: "system-ui, sans-serif" }}>Área de consulta</label>
                  <select style={{...inputStyle, cursor: "pointer"}} value={formData.area} onChange={e => setFormData({...formData, area: e.target.value})}>
                    <option value="penal" style={{ background: BG_PRIMARY }}>Derecho Penal</option>
                    <option value="civil" style={{ background: BG_PRIMARY }}>Derecho Civil</option>
                    <option value="familia" style={{ background: BG_PRIMARY }}>Derecho de Familia</option>
                    <option value="laboral" style={{ background: BG_PRIMARY }}>Derecho Laboral</option>
                    <option value="inmobiliario" style={{ background: BG_PRIMARY }}>Derecho Inmobiliario</option>
                    <option value="administrativo" style={{ background: BG_PRIMARY }}>Derecho Administrativo</option>
                  </select>
                </div>
                <div>
                  <label style={{ color: GOLD, fontSize: 13, marginBottom: 6, display: "block", fontFamily: "system-ui, sans-serif" }}>Describí tu consulta *</label>
                  <textarea style={{...inputStyle, minHeight: 120, resize: "vertical"}} value={formData.mensaje} onChange={e => setFormData({...formData, mensaje: e.target.value})} placeholder="Contanos brevemente tu situación..." />
                </div>
                <button style={btnGold} onClick={handleConsultaSubmit}>
                  <Send size={16} /> Enviar Consulta
                </button>
              </div>
            </div>
          )}

          {activePage === "turnos" && (
            <div>
              <p style={{ color: TEXT_MUTED, marginBottom: 32, lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>
                Reservá un turno para atención presencial en nuestro estudio de Los Polvorines o una consulta virtual por videollamada.
              </p>
              {turnoSent && (
                <div style={{ background: "#0a2a0a", border: "1px solid #1a4a1a", borderRadius: 8, padding: 16, marginBottom: 24, display: "flex", alignItems: "center", gap: 10, fontFamily: "system-ui, sans-serif" }}>
                  <CheckCircle size={20} color="#4ade80" /> <span style={{ color: "#4ade80" }}>Turno solicitado. Te confirmaremos por teléfono.</span>
                </div>
              )}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <label style={{ color: GOLD, fontSize: 13, marginBottom: 6, display: "block", fontFamily: "system-ui, sans-serif" }}>Nombre completo *</label>
                  <input style={inputStyle} value={turnoData.nombre} onChange={e => setTurnoData({...turnoData, nombre: e.target.value})} placeholder="Juan Pérez" />
                </div>
                <div>
                  <label style={{ color: GOLD, fontSize: 13, marginBottom: 6, display: "block", fontFamily: "system-ui, sans-serif" }}>Teléfono de contacto *</label>
                  <input style={inputStyle} value={turnoData.telefono} onChange={e => setTurnoData({...turnoData, telefono: e.target.value})} placeholder="11-XXXX-XXXX" />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={{ color: GOLD, fontSize: 13, marginBottom: 6, display: "block", fontFamily: "system-ui, sans-serif" }}>Fecha preferida *</label>
                    <input style={inputStyle} type="date" value={turnoData.fecha} onChange={e => setTurnoData({...turnoData, fecha: e.target.value})} />
                  </div>
                  <div>
                    <label style={{ color: GOLD, fontSize: 13, marginBottom: 6, display: "block", fontFamily: "system-ui, sans-serif" }}>Horario preferido</label>
                    <select style={{...inputStyle, cursor: "pointer"}} value={turnoData.hora} onChange={e => setTurnoData({...turnoData, hora: e.target.value})}>
                      <option value="" style={{ background: BG_PRIMARY }}>Seleccionar</option>
                      <option value="09:00" style={{ background: BG_PRIMARY }}>09:00</option>
                      <option value="10:00" style={{ background: BG_PRIMARY }}>10:00</option>
                      <option value="11:00" style={{ background: BG_PRIMARY }}>11:00</option>
                      <option value="12:00" style={{ background: BG_PRIMARY }}>12:00</option>
                      <option value="14:00" style={{ background: BG_PRIMARY }}>14:00</option>
                      <option value="15:00" style={{ background: BG_PRIMARY }}>15:00</option>
                      <option value="16:00" style={{ background: BG_PRIMARY }}>16:00</option>
                      <option value="17:00" style={{ background: BG_PRIMARY }}>17:00</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ color: GOLD, fontSize: 13, marginBottom: 6, display: "block", fontFamily: "system-ui, sans-serif" }}>Motivo de la consulta</label>
                  <textarea style={{...inputStyle, minHeight: 80, resize: "vertical"}} value={turnoData.motivo} onChange={e => setTurnoData({...turnoData, motivo: e.target.value})} placeholder="Breve descripción del tema a consultar..." />
                </div>
                <button style={btnGold} onClick={handleTurnoSubmit}>
                  <Calendar size={16} /> Solicitar Turno
                </button>
              </div>
            </div>
          )}

          {activePage === "seguimiento" && (
            <div>
              <p style={{ color: TEXT_MUTED, marginBottom: 32, lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>
                Ingresá el número de expediente de tu causa para consultar su estado actual.
              </p>
              <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
                <input style={{...inputStyle, flex: 1}} value={causaQuery} onChange={e => setCausaQuery(e.target.value)} placeholder="Ej: 88990" onKeyDown={e => e.key === "Enter" && handleCausaSearch()} />
                <button style={btnGold} onClick={handleCausaSearch}>
                  <Search size={16} /> Buscar
                </button>
              </div>
              {causaResult && (
                <div style={{ background: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28, fontFamily: "system-ui, sans-serif" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                    <FileText size={20} color={GOLD} />
                    <span style={{ color: GOLD, fontWeight: 700, fontSize: 18 }}>Expediente N° {causaResult.expediente}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {[
                      ["Estado", causaResult.estado],
                      ["Juzgado", causaResult.juzgado],
                      ["Último movimiento", causaResult.ultimoMov],
                      ["Próxima actuación", causaResult.proximo],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <div style={{ color: TEXT_MUTED, fontSize: 12, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1 }}>{label}</div>
                        <div style={{ color: "#fff", fontSize: 15 }}>{value}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 24, padding: "12px 16px", background: "rgba(201,168,76,0.08)", borderRadius: 8, border: `1px solid rgba(201,168,76,0.15)` }}>
                    <p style={{ color: GOLD_LIGHT, fontSize: 13, margin: 0 }}>
                      <AlertCircle size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: 6 }} />
                      Para información detallada, comunicate con el estudio al teléfono de contacto.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: BG_PRIMARY, minHeight: "100vh", color: "#fff", fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* ═══ NAVBAR ═══ */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(10,10,10,0.92)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => scrollTo("inicio")}>
            <img src={LOGO_SRC} alt="García Pozzaglio" style={{ height: 48, width: 48, objectFit: "contain", borderRadius: 4 }} />
            <div>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 16, letterSpacing: 1, lineHeight: 1.2 }}>GARCÍA POZZAGLIO</div>
              <div style={{ color: TEXT_MUTED, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", fontFamily: "system-ui, sans-serif" }}>Estudio Jurídico</div>
            </div>
          </div>
          {/* Desktop nav */}
          <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="hidden-mobile">
            {sections.map(s => (
              <button key={s.id} onClick={() => scrollTo(s.id)} style={{
                background: activeSection === s.id ? "rgba(201,168,76,0.1)" : "transparent",
                border: "none", color: activeSection === s.id ? GOLD : TEXT_MUTED,
                padding: "8px 14px", borderRadius: 6, cursor: "pointer", fontSize: 13,
                fontFamily: "system-ui, sans-serif", fontWeight: activeSection === s.id ? 600 : 400,
                transition: "all 0.2s",
              }}>
                {s.label}
              </button>
            ))}
          </div>
          {/* Mobile menu toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: GOLD, cursor: "pointer", display: "none" }} className="show-mobile">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: BG_CARD, borderTop: `1px solid ${BORDER}`, padding: "12px 24px" }} className="show-mobile">
            {sections.map(s => (
              <button key={s.id} onClick={() => scrollTo(s.id)} style={{
                display: "flex", alignItems: "center", gap: 10, width: "100%", textAlign: "left",
                background: "none", border: "none", color: activeSection === s.id ? GOLD : "#ccc",
                padding: "12px 0", cursor: "pointer", fontSize: 15, fontFamily: "system-ui, sans-serif",
                borderBottom: `1px solid ${BORDER}`,
              }}>
                <s.icon size={16} /> {s.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @keyframes pulse-wa { 0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.5); } 50% { box-shadow: 0 4px 30px rgba(37,211,102,0.8); } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } .show-mobile { display: block !important; } }
        input:focus, textarea:focus, select:focus { border-color: ${GOLD} !important; }
        button:hover { opacity: 0.92; }
        ::selection { background: ${GOLD}; color: ${BG_PRIMARY}; }
      `}</style>

      {/* ═══ HERO / INICIO ═══ */}
      <section id="inicio" ref={el => sectionRefs.current["inicio"] = el} style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "60px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.08) 0%, transparent 60%)` }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
          <div style={{ marginBottom: 32, display: "flex", justifyContent: "center" }}>
            <div style={{ background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0.05) 50%, transparent 70%)", padding: 24, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={LOGO_SRC} alt="García & Pozzaglio - Estudio Jurídico" style={{ width: "clamp(280px, 45vw, 450px)", height: "auto", objectFit: "contain", filter: "drop-shadow(0 0 40px rgba(201,168,76,0.35)) drop-shadow(0 8px 32px rgba(0,0,0,0.6))", borderRadius: 8 }} />
            </div>
          </div>
          <p style={{ color: GOLD_LIGHT, fontSize: "clamp(13px, 1.8vw, 16px)", maxWidth: 700, margin: "0 auto 20px", lineHeight: 1.8, fontFamily: "system-ui, sans-serif", textTransform: "uppercase", letterSpacing: 3 }}>
            DEFENSA PENAL · DERECHO CIVIL · ASESORAMIENTO INTEGRAL
          </p>
          <h1 style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 400, color: "#fff", margin: "0 0 24px", lineHeight: 1.5, fontFamily: "system-ui, sans-serif" }}>
            Abogados en Buenos Aires:{" "}
            <span style={{ color: GOLD, fontWeight: 700 }}>defensa penal, accidentes, mala praxis</span>{" "}
            y <span style={{ color: GOLD, fontWeight: 700 }}>daños y perjuicios</span>.
          </h1>
          <p style={{ color: TEXT_MUTED, fontSize: "clamp(14px, 1.8vw, 17px)", maxWidth: 650, margin: "0 auto 16px", lineHeight: 1.8, fontFamily: "system-ui, sans-serif" }}>
            Atención inmediata las 24 horas. Excarcelaciones urgentes, reclamos al seguro por accidentes, indemnizaciones por mala praxis y daños. Resultados concretos con atención personalizada.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 40, marginTop: 32 }}>
            {[
              { icon: Shield, text: "Confidencialidad absoluta" },
              { icon: Gavel, text: "Litigación estratégica" },
              { icon: Users, text: "Atención personalizada" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", background: "rgba(201,168,76,0.06)", borderRadius: 20, border: `1px solid rgba(201,168,76,0.15)` }}>
                <item.icon size={14} color={GOLD} />
                <span style={{ color: GOLD_LIGHT, fontSize: 12, fontFamily: "system-ui, sans-serif", letterSpacing: 0.5 }}>{item.text}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/5491138207360?text=Hola%2C%20necesito%20asesoramiento%20legal" target="_blank" rel="noopener noreferrer"
              onClick={() => { if (window.gtag_report_conversion) window.gtag_report_conversion(); }}
              style={{ ...btnGold, background: "#25D366", color: "#fff", textDecoration: "none", fontSize: "clamp(14px, 2vw, 16px)", padding: "14px 28px" }}>
              <svg viewBox="0 0 32 32" width="18" height="18" fill="#fff"><path d="M16.004 2.667A13.28 13.28 0 0 0 2.667 15.924a13.17 13.17 0 0 0 1.795 6.65L2.667 29.333l7.003-1.835A13.28 13.28 0 0 0 16.004 29.2c7.352 0 13.33-5.97 13.33-13.276 0-7.307-5.978-13.257-13.33-13.257Z"/></svg>
              Escribinos por WhatsApp
            </a>
            <a href="tel:+5491138207360" style={{ ...btnGold, textDecoration: "none" }}>
              <Phone size={16} /> Llamar ahora
            </a>
          </div>
          <p style={{ color: TEXT_MUTED, fontSize: 13, marginTop: 16, fontFamily: "system-ui, sans-serif" }}>
            Atención urgente 24/7 — Tel: 11 3820-7360
          </p>
        </div>
      </section>

      {/* ═══ QUIÉNES SOMOS ═══ */}
      <section id="nosotros" ref={el => sectionRefs.current["nosotros"] = el} style={{ padding: "80px 24px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ color: GOLD, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Quiénes somos</div>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#fff", margin: "0 0 20px" }}>Profesionales a su servicio</h2>
        </div>
        <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 48px", fontFamily: "system-ui, sans-serif" }}>
          <p style={{ color: TEXT_MUTED, fontSize: 15, lineHeight: 1.8, margin: "0 0 16px" }}>
            Somos un estudio jurídico fundado sobre los valores de <span style={{ color: GOLD_LIGHT }}>excelencia profesional</span>, <span style={{ color: GOLD_LIGHT }}>compromiso con el cliente</span> y <span style={{ color: GOLD_LIGHT }}>ética inquebrantable</span>. Con años de trayectoria en la Justicia Ordinaria de la Provincia de Buenos Aires, en Nación y en el Fuero Federal, brindamos soluciones legales efectivas y personalizadas.
          </p>
          <p style={{ color: TEXT_MUTED, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
            Nuestro objetivo es claro: <span style={{ color: "#fff", fontWeight: 600 }}>defender sus derechos con la máxima dedicación y obtener los mejores resultados posibles para cada caso</span>.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {[
            { name: "Dr. Marcos Celso Iván García", role: "Socio Fundador", mat: "", desc: "Abogado penalista y civilista con amplia experiencia en la Justicia Ordinaria de la Provincia de Buenos Aires, en Nación y en el Fuero Federal. Especializado en defensa penal en juicios orales y recursos ante Cámara, Casación y recursos extraordinarios ante la CSJN." },
            { name: "Procuradora Loreley Yasmín Pozzaglio", role: "Procuradora", mat: "", desc: "Procuradora especialista en mediación, conciliación y acuerdos judiciales y extrajudiciales. Amplia experiencia en negociación de conflictos y resolución alternativa de disputas en todas las ramas del derecho. Responsable de la gestión integral del estudio, coordinación de agenda, seguimiento de causas, relación con clientes y supervisión de trámites administrativos y procesales." },
          ].map((p, i) => (
            <div key={i} style={{ background: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 32, transition: "border-color 0.3s" }}
              onMouseOver={e => e.currentTarget.style.borderColor = GOLD_DIM} onMouseOut={e => e.currentTarget.style.borderColor = BORDER}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: `linear-gradient(135deg, ${GOLD}, ${GOLD_DIM})`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <UserCheck size={24} color={BG_PRIMARY} />
              </div>
              <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, margin: "0 0 4px" }}>{p.name}</h3>
              <div style={{ color: GOLD, fontSize: 14, marginBottom: 4, fontFamily: "system-ui, sans-serif" }}>{p.role}</div>
              <div style={{ color: GOLD_DIM, fontSize: 12, marginBottom: 16, fontFamily: "system-ui, sans-serif" }}>{p.mat}</div>
              <p style={{ color: TEXT_MUTED, fontSize: 14, lineHeight: 1.7, margin: 0, fontFamily: "system-ui, sans-serif" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ ÁREAS DE PRÁCTICA ═══ */}
      <section id="areas" ref={el => sectionRefs.current["areas"] = el} style={{ padding: "80px 24px", background: BG_CARD }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ color: GOLD, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Especialidades</div>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: "#fff", margin: 0 }}>Áreas de Práctica</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {areas.map((a, i) => (
              <div key={i} style={{ background: BG_PRIMARY, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28, transition: "border-color 0.3s, transform 0.2s", cursor: "default" }}
                onMouseOver={e => { e.currentTarget.style.borderColor = GOLD_DIM; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = "translateY(0)"; }}>
                <a.icon size={28} color={GOLD} strokeWidth={1.5} style={{ marginBottom: 16 }} />
                <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>{a.title}</h3>
                <p style={{ color: TEXT_MUTED, fontSize: 14, lineHeight: 1.6, margin: 0, fontFamily: "system-ui, sans-serif" }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══ DEFENSA PENAL FEDERAL ═══ */}
      <section id="federal" ref={el => sectionRefs.current["federal"] = el} style={{ padding: "80px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.06) 0%, transparent 60%)` }} />
        <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Hero Federal */}
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: GOLD, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Estudio Jurídico · Defensa Penal Federal</div>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 700, color: "#fff", margin: "0 0 24px", lineHeight: 1.2 }}>
              DEFENSA PENAL{" "}<span style={{ color: GOLD }}>FEDERAL</span>
            </h2>
            <p style={{ color: TEXT_MUTED, fontSize: 16, maxWidth: 600, margin: "0 auto 32px", lineHeight: 1.7, fontFamily: "system-ui, sans-serif" }}>
              Representamos a personas y empresas en causas del fuero federal en toda la República Argentina, con rigor técnico, estrategia y presencia inmediata en cada provincia.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <button style={btnGold} onClick={() => setActivePage("consulta")}>
                <MessageSquare size={16} /> Consultá tu caso
              </button>
            </div>
          </div>

          {/* Especialistas + Cards laterales */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, marginBottom: 60 }}>
            <div>
              <div style={{ color: GOLD, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Quiénes somos</div>
              <h3 style={{ fontSize: 24, fontWeight: 700, color: "#fff", margin: "0 0 20px", lineHeight: 1.3 }}>Especialistas en delitos federales complejos</h3>
              <p style={{ color: TEXT_MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 16px", fontFamily: "system-ui, sans-serif" }}>
                <span style={{ color: GOLD_LIGHT, fontWeight: 600 }}>García & Pozzaglio</span> es un estudio jurídico especializado en <span style={{ color: "#fff", fontWeight: 600 }}>defensa penal federal</span>, dedicado a representar a nuestros clientes en las causas de mayor complejidad del sistema penal argentino: narcotráfico y organizaciones criminales, delitos aduaneros y migratorios, delitos contra la administración pública, lavado de activos, delitos cambiarios y económicos, trata de personas y crímenes de lesa humanidad, entre otras materias del fuero federal.
              </p>
              <p style={{ color: TEXT_MUTED, fontSize: 14, lineHeight: 1.8, margin: "0 0 16px", fontFamily: "system-ui, sans-serif" }}>
                Nuestro trabajo combina <span style={{ color: "#fff", fontWeight: 600 }}>análisis técnico riguroso</span>, <span style={{ color: "#fff", fontWeight: 600 }}>estrategia probatoria</span> y un <span style={{ color: "#fff", fontWeight: 600 }}>acompañamiento personalizado</span> en cada etapa del proceso, con el objetivo de proteger la libertad, los derechos y las garantías constitucionales de quienes confían en nosotros.
              </p>
              <p style={{ color: TEXT_MUTED, fontSize: 14, lineHeight: 1.8, margin: 0, fontFamily: "system-ui, sans-serif" }}>
                Actuamos con la misma exigencia sin importar la escala del caso: desde investigaciones preliminares hasta juicios orales de alta exposición pública, siempre con una defensa técnica sólida y una mirada estratégica de largo plazo.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { title: "Especialización", desc: "Exclusivamente derecho penal federal y causas de alta complejidad." },
                { title: "Cobertura", desc: "Presencia inmediata en todas las provincias de la República Argentina." },
                { title: "Metodología", desc: "Inteligencia jurídica aplicada mediante nuestro propio sistema GLIS." },
                { title: "Enfoque", desc: "Defensa técnica, estratégica y personalizada en cada causa." },
              ].map((item, i) => (
                <div key={i} style={{ background: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 20, borderLeft: `3px solid ${GOLD}` }}>
                  <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1, fontFamily: "system-ui, sans-serif" }}>{item.title}</div>
                  <p style={{ color: TEXT_MUTED, fontSize: 14, lineHeight: 1.6, margin: 0, fontFamily: "system-ui, sans-serif" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Áreas dentro del fuero federal */}
          <div style={{ marginBottom: 60 }}>
            <div style={{ color: GOLD, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Áreas de práctica</div>
            <h3 style={{ fontSize: 24, fontWeight: 700, color: "#fff", margin: "0 0 12px", lineHeight: 1.3 }}>Nuestra especialización dentro del fuero federal</h3>
            <p style={{ color: TEXT_MUTED, fontSize: 14, lineHeight: 1.7, margin: "0 0 32px", fontFamily: "system-ui, sans-serif", maxWidth: 700 }}>
              Cubrimos el espectro completo del derecho penal federal argentino, con equipos preparados para causas de alta complejidad técnica y probatoria.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              {[
                { icon: FileText, title: "Falsificación de Documentos Públicos y Moneda", desc: "Documentos nacionales y falsificación de moneda." },
                { icon: Landmark, title: "Delitos Migratorios", desc: "Defensa conforme a la Ley 25.871." },
                { icon: Briefcase, title: "Delitos Aduaneros", desc: "Contrabando y su tentativa, Código Aduanero." },
                { icon: AlertCircle, title: "Ley de Estupefacientes", desc: "Narcotráfico, tenencia y comercialización — Ley 23.737." },
                { icon: Building, title: "Delitos de Funcionarios Federales", desc: "Delitos en el ejercicio de funciones públicas." },
                { icon: Shield, title: "Propiedad Intelectual e Industrial", desc: "Marcas, patentes y derechos de autor." },
                { icon: FileText, title: "Falsificación de Sellos y Marcas Oficiales", desc: "Sellos, timbres y marcas del Estado Nacional." },
                { icon: Landmark, title: "Delitos Cambiarios", desc: "Régimen Penal Cambiario, Ley 19.359." },
                { icon: Gavel, title: "Delitos de Lesa Humanidad", desc: "Causas por crímenes del terrorismo de Estado." },
                { icon: Building, title: "Delitos contra la Administración Pública", desc: "Corrupción y afectación al Estado Nacional." },
                { icon: Users, title: "Trata de Personas", desc: "Defensa conforme a la Ley 26.364." },
                { icon: Briefcase, title: "Lavado de Activos", desc: "Delitos económicos y financieros — Ley 25.246." },
              ].map((item, i) => (
                <div key={i} style={{ background: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: 24, transition: "border-color 0.3s" }}
                  onMouseOver={e => e.currentTarget.style.borderColor = GOLD_DIM}
                  onMouseOut={e => e.currentTarget.style.borderColor = BORDER}>
                  <item.icon size={22} color={GOLD} strokeWidth={1.5} style={{ marginBottom: 12 }} />
                  <h4 style={{ color: "#fff", fontSize: 15, fontWeight: 700, margin: "0 0 8px" }}>{item.title}</h4>
                  <p style={{ color: TEXT_MUTED, fontSize: 13, lineHeight: 1.6, margin: 0, fontFamily: "system-ui, sans-serif" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Por qué elegirnos */}
          <div style={{ marginBottom: 60 }}>
            <div style={{ color: GOLD, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Por qué elegirnos</div>
            <h3 style={{ fontSize: 24, fontWeight: 700, color: "#fff", margin: "0 0 32px", lineHeight: 1.3 }}>Una defensa técnica pensada para causas complejas</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
              {[
                { icon: Search, title: "Análisis Objetivo", desc: "Análisis detallado de cada caso y estrategia a medida." },
                { icon: Shield, title: "Derechos y Garantías", desc: "Protegemos tus derechos en cada etapa del proceso." },
                { icon: Star, title: "Experiencia y Compromiso", desc: "Trayectoria defendiendo casos complejos." },
                { icon: UserCheck, title: "Acompañamiento Personalizado", desc: "Estamos a tu lado para brindarte claridad y tranquilidad." },
              ].map((item, i) => (
                <div key={i} style={{ background: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28, textAlign: "center", transition: "border-color 0.3s" }}
                  onMouseOver={e => e.currentTarget.style.borderColor = GOLD_DIM}
                  onMouseOut={e => e.currentTarget.style.borderColor = BORDER}>
                  <div style={{ width: 48, height: 48, borderRadius: 10, background: `rgba(201,168,76,0.1)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                    <item.icon size={22} color={GOLD} />
                  </div>
                  <h4 style={{ color: "#fff", fontSize: 14, fontWeight: 700, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: 1 }}>{item.title}</h4>
                  <p style={{ color: TEXT_MUTED, fontSize: 13, lineHeight: 1.6, margin: 0, fontFamily: "system-ui, sans-serif" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* GLIS */}
          <div style={{ marginBottom: 60, textAlign: "center", padding: "48px 24px", background: `radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)`, borderRadius: 16 }}>
            <div style={{ color: GOLD, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>G&P Legal Intelligence System</div>
            <h3 style={{ fontSize: 24, fontWeight: 700, color: "#fff", margin: "0 0 20px", lineHeight: 1.3 }}>Inteligencia jurídica aplicada a la defensa penal</h3>
            <p style={{ color: TEXT_MUTED, fontSize: 15, maxWidth: 650, margin: "0 auto", lineHeight: 1.8, fontFamily: "system-ui, sans-serif" }}>
              GLIS es nuestro sistema propio de inteligencia jurídica: una metodología que combina análisis objetivo, estrategia y tecnología para construir la defensa más sólida posible en cada causa federal.
            </p>
          </div>

          {/* Presencia nacional */}
          <div style={{ textAlign: "center", marginBottom: 60, padding: "40px 24px", background: BG_CARD, borderRadius: 12, border: `1px solid ${BORDER}` }}>
            <h3 style={{ fontSize: 24, fontWeight: 700, color: "#fff", margin: "0 0 16px" }}>Presencia en todo el país</h3>
            <p style={{ color: TEXT_MUTED, fontSize: 15, maxWidth: 600, margin: "0 auto", lineHeight: 1.7, fontFamily: "system-ui, sans-serif" }}>
              Ejercemos el fuero federal penal en todo el territorio nacional, con capacidad de respuesta inmediata en cada provincia de la República Argentina.
            </p>
          </div>


          {/* Galería Federal */}
          <div style={{ marginBottom: 60 }}>
            <div style={{ color: GOLD, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Galería</div>
            <h3 style={{ fontSize: 24, fontWeight: 700, color: "#fff", margin: "0 0 32px", lineHeight: 1.3 }}>Nuestras especialidades en detalle</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
              {federalImages.map((img, i) => (
                <div key={i} style={{ borderRadius: 12, overflow: "hidden", border: `1px solid ${BORDER}`, transition: "transform 0.3s, border-color 0.3s", cursor: "pointer" }}
                  onMouseOver={e => { e.currentTarget.style.borderColor = GOLD_DIM; e.currentTarget.style.transform = "scale(1.02)"; }}
                  onMouseOut={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = "scale(1)"; }}>
                  <img src={img} alt={`Defensa Penal Federal ${i + 1}`} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Contacto Federal */}
          <div style={{ textAlign: "center", padding: "48px 24px", background: BG_CARD, borderRadius: 16, border: `1px solid ${BORDER}` }}>
            <div style={{ color: GOLD, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Contacto</div>
            <h3 style={{ fontSize: 24, fontWeight: 700, color: "#fff", margin: "0 0 16px" }}>¿Necesitás asesoramiento legal?</h3>
            <p style={{ color: TEXT_MUTED, fontSize: 15, maxWidth: 550, margin: "0 auto 28px", lineHeight: 1.7, fontFamily: "system-ui, sans-serif" }}>
              Si vos o alguien cercano está atravesando una causa penal federal, contactanos. Estamos para ayudarte.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", marginBottom: 24, fontFamily: "system-ui, sans-serif" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Phone size={18} color={GOLD} />
                <span style={{ color: "#fff", fontSize: 15 }}>11-3820-7360 / 11-2725-3359</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Mail size={18} color={GOLD} />
                <span style={{ color: "#fff", fontSize: 15 }}>estudiojuridicocelso@gmail.com</span>
              </div>
            </div>
            <button style={btnGold} onClick={() => setActivePage("consulta")}>
              <Send size={16} /> Escribinos ahora
            </button>
          </div>
        </div>
      </section>

      {/* ═══ SERVICIOS INTERACTIVOS ═══ */}
      <section id="servicios" ref={el => sectionRefs.current["servicios"] = el} style={{ padding: "80px 24px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ color: GOLD, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Servicios online</div>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#fff", margin: 0 }}>Gestiones desde tu casa</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {[
            { icon: MessageSquare, title: "Consulta Online", desc: "Envianos tu consulta y te respondemos a la brevedad con una evaluación preliminar de tu caso.", page: "consulta" },
            { icon: Calendar, title: "Agenda de Turnos", desc: "Reservá un turno presencial o virtual en el horario que más te convenga.", page: "turnos" },
            { icon: Search, title: "Seguimiento de Causas", desc: "Consultá el estado actualizado de tu expediente ingresando el número de causa.", page: "seguimiento" },
          ].map((s, i) => (
            <div key={i} onClick={() => setActivePage(s.page)} style={{
              background: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 32,
              cursor: "pointer", transition: "border-color 0.3s, transform 0.2s",
            }} onMouseOver={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = "translateY(0)"; }}>
              <div style={{ width: 48, height: 48, borderRadius: 10, background: `rgba(201,168,76,0.1)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <s.icon size={22} color={GOLD} />
              </div>
              <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>{s.title}</h3>
              <p style={{ color: TEXT_MUTED, fontSize: 14, lineHeight: 1.6, margin: "0 0 16px", fontFamily: "system-ui, sans-serif" }}>{s.desc}</p>
              <span style={{ color: GOLD, fontSize: 14, fontWeight: 600, fontFamily: "system-ui, sans-serif", display: "flex", alignItems: "center", gap: 6 }}>
                Acceder <ArrowRight size={14} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ BLOG / NOVEDADES ═══ */}
      <section id="blog" ref={el => sectionRefs.current["blog"] = el} style={{ padding: "80px 24px", background: BG_CARD }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ color: GOLD, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Blog</div>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: "#fff", margin: 0 }}>Novedades Jurídicas</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {blogPosts.map((post, i) => (
              <article key={i} onClick={() => { setBlogPost(post.slug); window.history.pushState(null, "", `/blog/${post.slug}`); document.title = post.title + " | García Pozzaglio"; }}
                style={{ background: BG_PRIMARY, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28, transition: "border-color 0.3s", cursor: "pointer" }}
                onMouseOver={e => e.currentTarget.style.borderColor = GOLD_DIM} onMouseOut={e => e.currentTarget.style.borderColor = BORDER}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ background: `rgba(201,168,76,0.12)`, color: GOLD, padding: "4px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600, fontFamily: "system-ui, sans-serif" }}>{post.tag}</span>
                  <span style={{ color: TEXT_MUTED, fontSize: 12, fontFamily: "system-ui, sans-serif" }}>{post.date}</span>
                </div>
                <h3 style={{ color: "#fff", fontSize: 17, fontWeight: 700, margin: "0 0 10px", lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ color: TEXT_MUTED, fontSize: 14, lineHeight: 1.6, margin: 0, fontFamily: "system-ui, sans-serif" }}>{post.excerpt}</p>
                <span style={{ color: GOLD, fontSize: 13, fontWeight: 600, marginTop: 12, display: "inline-block", fontFamily: "system-ui, sans-serif" }}>Leer más →</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIOS ═══ */}
      <section id="testimonios" ref={el => sectionRefs.current["testimonios"] = el} style={{ padding: "80px 24px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ color: GOLD, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Testimonios</div>
          <h2 style={{ fontSize: 32, fontWeight: 700, color: "#fff", margin: 0 }}>Lo que dicen nuestros clientes</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {testimonios.map((t, i) => (
            <div key={i} style={{ background: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28 }}>
              <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} color={j < t.rating ? GOLD : BORDER} fill={j < t.rating ? GOLD : "none"} />
                ))}
              </div>
              <p style={{ color: "#ddd", fontSize: 14, lineHeight: 1.7, margin: "0 0 16px", fontStyle: "italic", fontFamily: "system-ui, sans-serif" }}>
                "{t.texto}"
              </p>
              <div style={{ color: GOLD, fontSize: 14, fontWeight: 600, fontFamily: "system-ui, sans-serif" }}>{t.nombre}</div>
            </div>
          ))}
        </div>
      </section>


      {/* ═══ GALERÍA ═══ */}
      <section id="galeria" ref={el => sectionRefs.current["galeria"] = el} style={{ padding: "80px 24px", background: BG_CARD }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ color: GOLD, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Galería</div>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: "#fff", margin: 0 }}>Diccionario Jurídico</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {galleryImages.map((img, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: "hidden", border: `1px solid ${BORDER}`, transition: "transform 0.3s, border-color 0.3s", cursor: "pointer" }}
                onMouseOver={e => { e.currentTarget.style.borderColor = GOLD_DIM; e.currentTarget.style.transform = "scale(1.02)"; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.transform = "scale(1)"; }}>
                <img src={img} alt={`Diccionario Jurídico ${i + 1}`} style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" ref={el => sectionRefs.current["faq"] = el} style={{ padding: "80px 24px", background: BG_CARD }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ color: GOLD, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>FAQ</div>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: "#fff", margin: 0 }}>Preguntas Frecuentes</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: BG_PRIMARY, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} style={{
                  width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                  background: "none", border: "none", color: "#fff", padding: "18px 20px", cursor: "pointer",
                  fontSize: 15, fontWeight: 600, textAlign: "left", fontFamily: "system-ui, sans-serif",
                }}>
                  {f.q}
                  {faqOpen === i ? <ChevronUp size={18} color={GOLD} /> : <ChevronDown size={18} color={TEXT_MUTED} />}
                </button>
                {faqOpen === i && (
                  <div style={{ padding: "0 20px 18px", color: TEXT_MUTED, fontSize: 14, lineHeight: 1.7, fontFamily: "system-ui, sans-serif" }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACTO / FOOTER ═══ */}
      <section id="contacto" ref={el => sectionRefs.current["contacto"] = el} style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ color: GOLD, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>Contacto</div>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: "#fff", margin: 0 }}>Comunicate con nosotros</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24, marginBottom: 48 }}>
            {[
              { icon: MapPin, label: "Dirección", value: "Av. Juan Domingo Perón 3274, Local 25, Los Polvorines, Provincia de Buenos Aires" },
              { icon: Phone, label: "Teléfono", value: "11-3820-7360 / 11-2725-3359" },
              { icon: Mail, label: "Email", value: "marcos_ivan85@hotmail.com.ar / Micomputadora1989@gmail.com" },
              { icon: Send, label: "Instagram", value: "@garciapozzaglioestudiojuridico", link: "https://www.instagram.com/garciapozzaglioestudiojuridico?igsh=czdwOW5yZWFuY25q" },
            ].map((c, i) => {
              const Wrapper = c.link ? "a" : "div";
              const wrapperProps = c.link ? { href: c.link, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: "none" } } : {};
              return (
                <Wrapper key={i} {...wrapperProps}>
                  <div style={{ background: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, display: "flex", alignItems: "flex-start", gap: 14, cursor: c.link ? "pointer" : "default", transition: "border-color 0.3s" }}
                    onMouseOver={e => { if (c.link) e.currentTarget.style.borderColor = GOLD_DIM; }}
                    onMouseOut={e => { if (c.link) e.currentTarget.style.borderColor = BORDER; }}>
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: `rgba(201,168,76,0.1)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <c.icon size={18} color={GOLD} />
                    </div>
                    <div>
                      <div style={{ color: TEXT_MUTED, fontSize: 12, marginBottom: 4, textTransform: "uppercase", letterSpacing: 1, fontFamily: "system-ui, sans-serif" }}>{c.label}</div>
                      <div style={{ color: "#fff", fontSize: 14, fontFamily: "system-ui, sans-serif", wordBreak: "break-word" }}>{c.value}</div>
                    </div>
                  </div>
                </Wrapper>
              );
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 48 }}>
            <button style={btnGold} onClick={() => setActivePage("consulta")}>
              <MessageSquare size={16} /> Enviá tu consulta
            </button>
            <button style={{ ...btnGold, background: "transparent", border: `1px solid ${GOLD}`, color: GOLD }} onClick={() => setActivePage("turnos")}>
              <Calendar size={16} /> Pedí un turno
            </button>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ borderTop: `1px solid ${BORDER}`, padding: "32px 24px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
          <img src={LOGO_SRC} alt="García Pozzaglio" style={{ height: 36, width: 36, objectFit: "contain", borderRadius: 4 }} />
          <span style={{ color: GOLD, fontWeight: 700, fontSize: 14, letterSpacing: 1 }}>GARCÍA POZZAGLIO</span>
        </div>
        <p style={{ color: TEXT_MUTED, fontSize: 12, margin: 0, fontFamily: "system-ui, sans-serif" }}>
          © 2026 Estudio Jurídico García Pozzaglio — Todos los derechos reservados
        </p>
        <p style={{ color: "#555", fontSize: 11, marginTop: 8, fontFamily: "system-ui, sans-serif" }}>
          Av. Juan Domingo Perón 3274, Local 25 — Los Polvorines, Provincia de Buenos Aires
        </p>
      </footer>

      {/* ═══ WHATSAPP FLOATING BUTTON ═══ */}
      <a href="https://wa.me/5491138207360?text=Hola%2C%20necesito%20asesoramiento%20legal" target="_blank" rel="noopener noreferrer"
       onClick={() => { if (window.gtag_report_conversion) window.gtag_report_conversion(); }}
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 100,
          display: "flex", alignItems: "center", gap: 10,
          background: "#25D366", padding: "14px 22px", borderRadius: 50,
          boxShadow: "0 4px 20px rgba(37,211,102,0.5)", cursor: "pointer",
          transition: "transform 0.2s, box-shadow 0.2s", textDecoration: "none",
          animation: "pulse-wa 2s infinite",
        }}
        onMouseOver={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 6px 28px rgba(37,211,102,0.6)"; }}
        onMouseOut={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.5)"; }}
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff">
          <path d="M16.004 2.667A13.28 13.28 0 0 0 2.667 15.924a13.17 13.17 0 0 0 1.795 6.65L2.667 29.333l7.003-1.835A13.28 13.28 0 0 0 16.004 29.2c7.352 0 13.33-5.97 13.33-13.276 0-7.307-5.978-13.257-13.33-13.257Zm0 24.29a11.01 11.01 0 0 1-5.612-1.537l-.403-.239-4.177 1.095 1.114-4.07-.263-.418A10.93 10.93 0 0 1 4.95 15.924c0-6.09 4.96-11.043 11.054-11.043 6.094 0 11.047 4.953 11.047 11.043 0 6.097-4.953 11.033-11.047 11.033Zm6.063-8.27c-.332-.167-1.97-.971-2.276-1.082-.306-.111-.528-.167-.75.167-.222.333-.862 1.082-1.056 1.305-.195.222-.389.25-.722.083-.333-.167-1.405-.518-2.676-1.65-.989-.881-1.656-1.97-1.85-2.303-.195-.333-.021-.514.146-.68.15-.148.333-.389.5-.583.167-.195.222-.333.333-.556.111-.222.056-.417-.028-.583-.083-.167-.75-1.806-1.028-2.472-.27-.649-.546-.562-.75-.572-.194-.009-.417-.011-.639-.011a1.225 1.225 0 0 0-.889.417c-.306.333-1.166 1.138-1.166 2.777 0 1.639 1.194 3.222 1.36 3.444.167.222 2.35 3.59 5.695 5.034.796.344 1.417.549 1.902.703.799.254 1.526.218 2.1.132.641-.096 1.971-.806 2.249-1.583.278-.778.278-1.445.194-1.584-.083-.139-.305-.222-.638-.389Z"/>
        </svg>
        <span style={{ color: "#fff", fontWeight: 700, fontSize: 15, fontFamily: "system-ui, sans-serif" }}>Consultá ahora</span>
      </a>
    </div>
  );
}

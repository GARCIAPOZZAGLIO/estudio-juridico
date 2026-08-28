import { useState, useEffect, useRef } from "react";
import { Phone, MapPin, Mail, Calendar, FileText, Search, Menu, X, Users, Briefcase, Shield, Home as HomeIcon, MessageSquare, Star, BookOpen, HelpCircle, ChevronDown, ChevronUp, Send, ArrowRight, Gavel, Building, Heart, Landmark, UserCheck, AlertCircle, CheckCircle } from "lucide-react";

const LOGO_SRC = "/images/logo_src.jpg";

const GAL_01 = "/images/gal_01.jpg";
const GAL_02 = "/images/gal_02.jpg";
const GAL_03 = "/images/gal_03.jpg";
const GAL_04 = "/images/gal_04.jpg";
const GAL_05 = "/images/gal_05.jpg";

const GAL_01_B = "/images/gal_01_b.jpg";
const GAL_02_B = "/images/gal_02_b.jpg";
const GAL_03_B = "/images/gal_03_b.jpg";

const GAL_01_C = "/images/gal_01_c.jpg";
const GAL_02_C = "/images/gal_02_c.jpg";
const GAL_03_C = "/images/gal_03_c.jpg";

const GAL_01_D = "/images/gal_01_d.jpg";

const GAL_01_E = "/images/gal_01_e.jpg";

const GAL_01_F = "/images/gal_01_f.jpg";


const FED_1 = "/images/fed_1.jpg";
const FED_2 = "/images/fed_2.jpg";
const FED_3 = "/images/fed_3.jpg";
const FED_4 = "/images/fed_4.jpg";
const FED_5 = "/images/fed_5.jpg";
const FED_6 = "/images/fed_6.jpg";
const FED_7 = "/images/fed_7.jpg";
const FED_8 = "/images/fed_8.jpg";
const FED_9 = "/images/fed_9.jpg";
const FED_10 = "/images/fed_10.jpg";
const FED_11 = "/images/fed_11.jpg";
const FED_12 = "/images/fed_12.jpg";
const FED_13 = "/images/fed_13.jpg";
const FED_14 = "/images/fed_14.jpg";
const FED_15 = "/images/fed_15.jpg";
const FED_16 = "/images/fed_16.jpg";
const FED_17 = "/images/fed_17.jpg";

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
    { icon: Gavel, title: "Derecho Penal", desc: "Defensa integral en todas las etapas del proceso penal: investigación preliminar, instrucción, juicio oral y recursos. Excarcelaciones, morigeraciones de prisión preventiva, juicios abreviados, suspensiones de juicio a prueba (probation), recursos de apelación, casación y recursos extraordinarios ante la CSJN. Defensa en delitos contra la propiedad, contra las personas, estupefacientes, delitos económicos y crimen organizado." },
    { icon: Building, title: "Derecho Civil", desc: "Daños y perjuicios, responsabilidad civil contractual y extracontractual, cobro de deudas, ejecuciones de sentencia, juicios ejecutivos, desalojos, interdictos, acciones posesorias, sucesiones, declaratorias de herederos, contratos de locación, compraventa, donaciones, usucapión y prescripción adquisitiva. Medidas cautelares, embargos e inhibiciones." },
    { icon: Heart, title: "Derecho de Familia", desc: "Divorcios (contenciosos y de común acuerdo), fijación y modificación de cuota alimentaria, régimen de comunicación y cuidado personal de hijos, restitución internacional de menores, adopción, violencia familiar (medidas de protección y exclusión del hogar), liquidación de sociedad conyugal y compensaciones económicas." },
    { icon: Users, title: "Derecho Laboral", desc: "Despidos con y sin causa, diferencias salariales, accidentes de trabajo, enfermedades profesionales, reclamos ante SECLO, representación en audiencias de conciliación, juicios laborales, acoso laboral (mobbing), registración deficiente, trabajo en negro, indemnizaciones por antigüedad, preaviso y vacaciones no gozadas." },
    { icon: Landmark, title: "Derecho Inmobiliario", desc: "Usucapión (prescripción adquisitiva larga y corta), análisis de cadenas de titularidad, regularización dominial, escrituraciones, boletos de compraventa, constitución y ejecución de hipotecas, mensuras, subdivisiones, propiedad horizontal, conflictos entre consorcistas, desalojos y acciones reivindicatorias." },
    { icon: Shield, title: "Derecho Administrativo", desc: "Amparos individuales y colectivos, acciones de inconstitucionalidad, recursos jerárquicos y de alzada, reclamos ante organismos públicos, impugnación de actos administrativos, habeas data, mandamus, asesoramiento a sociedades de fomento y entidades de bien público, licitaciones y contrataciones estatales." },
    { icon: Landmark, title: "Causas Federales", desc: "Defensa estratégica y representación integral en causas federales en todo el país. Delitos federales, narcotráfico, contrabando, evasión fiscal, lavado de activos, trata de personas, delitos contra el orden constitucional. Actuamos en Juzgados Federales, Cámaras y Tribunales Orales Federales en todas las jurisdicciones." },
    { icon: Shield, title: "ART - Riesgos del Trabajo", desc: "Reclamos por accidentes laborales in itinere y en el lugar de trabajo, enfermedades profesionales, incapacidades parciales y totales, gran invalidez. Determinación de porcentajes de incapacidad, reclamos ante Comisiones Médicas, recursos ante la Justicia, juicios por diferencias indemnizatorias y demandas contra empleadores por falta de cobertura." },
    { icon: Briefcase, title: "Accidentes de Tránsito", desc: "Representación legal integral en siniestros viales. Reclamos por lesiones leves, graves y gravísimas, incapacidad sobreviniente, daño moral, daño psicológico, lucro cesante, pérdida de chance, gastos médicos y de rehabilitación. Negociación extrajudicial con aseguradoras, mediaciones y litigación judicial por daños y perjuicios." },
    { icon: Building, title: "Sociedades", desc: "Constitución de SAS, SRL, SA y sociedades simples. Modificación de estatutos, asambleas ordinarias y extraordinarias, conflictos entre socios, exclusión de socios, disolución y liquidación de sociedades, responsabilidad de directores y administradores, intervención judicial, auditorías societarias e inscripciones ante IGJ y DPPJ." },
    { icon: Users, title: "Defensa al Consumidor", desc: "Protección integral de los derechos del consumidor. Reclamos por incumplimiento de garantías, productos defectuosos, publicidad engañosa, prácticas abusivas, cláusulas abusivas en contratos de adhesión. Acciones ante COPREC, mediaciones, denuncias ante autoridades de aplicación, daño punitivo y acciones colectivas de consumo." },
    { icon: Landmark, title: "Recobros Internacionales", desc: "Gestión y recupero de créditos y deudas a nivel internacional. Ejecución de sentencias extranjeras, exhortos internacionales, cartas rogatorias, cobro de obligaciones transfronterizas, coordinación con estudios jurídicos en el exterior, tratados de cooperación judicial y arbitraje comercial internacional." },
  ];

  const faqs = [
    { q: "¿Cuánto cuesta una consulta inicial?", a: "La primera consulta tiene un costo accesible que se informa al momento de coordinar el turno. En casos de urgencia penal, la consulta puede realizarse de forma inmediata." },
    { q: "¿Trabajan con mediación obligatoria?", a: "Sí, cumplimos con todas las instancias de mediación prejudicial obligatoria conforme la Ley 13.951 de la Provincia de Buenos Aires, salvo en los supuestos de exclusión previstos en el art. 4°." },
    { q: "¿Atienden en otros departamentos judiciales?", a: "Trabajamos en toda la Provincia de Buenos Aires, CABA y el interior del país en causas federales." },
    { q: "¿Cómo puedo hacer el seguimiento de mi causa?", a: "A través de nuestra sección de Seguimiento de Causas podés consultar el estado actualizado ingresando el número de expediente que te fue asignado." },
    { q: "¿Ofrecen planes de pago para honorarios?", a: "Sí, trabajamos con planes de pago flexibles adaptados a la situación de cada cliente. Los honorarios se pactan de forma transparente al inicio de cada relación profesional." },
    { q: "¿Realizan consultas virtuales?", a: "Sí, ofrecemos consultas por videollamada para quienes no puedan acercarse a nuestro estudio en Los Polvorines. Coordiná tu turno online o por teléfono." },
  ];

  const testimonios = [
    { nombre: "María L.", texto: "Excelente atención y profesionalismo. Me acompañaron durante todo el proceso penal con dedicación y claridad.", rating: 5 },
    { nombre: "Carlos R.", texto: "Resolvieron mi caso civil de manera eficiente. Siempre estuvieron disponibles para responder mis dudas.", rating: 5 },
    { nombre: "Luciana G.", texto: "Los recomiendo para temas de familia. Muy humanos y comprometidos con la situación de cada cliente.", rating: 5 },
    { nombre: "Jorge M.", texto: "Profesionales serios y responsables. Mi caso laboral se resolvió favorablemente gracias a su intervención.", rating: 4 },
  ];

  const blogPosts = [
    { title: "Reforma del régimen locativo: DNU 70/2023", excerpt: "Análisis de los cambios en materia de alquileres y su impacto en locadores y locatarios bajo el nuevo marco normativo.", date: "Julio 2026", tag: "Civil" },
    { title: "Juicio por jurados en Provincia de Buenos Aires", excerpt: "Claves del procedimiento ante el Tribunal en lo Criminal bajo la ley de juicio por jurados y estrategias de defensa.", date: "Junio 2026", tag: "Penal" },
    { title: "Usucapión: requisitos y plazos actualizados", excerpt: "Guía práctica sobre prescripción adquisitiva de dominio según el Código Civil y Comercial vigente.", date: "Mayo 2026", tag: "Inmobiliario" },
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
            Su causa merece una <span style={{ color: GOLD, fontWeight: 700 }}>defensa estratégica</span>,{" "}
            respaldada por profesionales con experiencia en la{" "}
            <span style={{ color: GOLD, fontWeight: 700 }}>Justicia Provincial, Nacional y Federal</span>.
          </h1>
          <p style={{ color: TEXT_MUTED, fontSize: "clamp(14px, 1.8vw, 17px)", maxWidth: 650, margin: "0 auto 16px", lineHeight: 1.8, fontFamily: "system-ui, sans-serif" }}>
            En García & Pozzaglio trabajamos con compromiso, transparencia y dedicación para proteger sus derechos. Cada caso es único y merece una atención personalizada con resultados concretos.
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
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button style={btnGold} onClick={() => setActivePage("consulta")}>
              <MessageSquare size={16} /> Solicitá una consulta
            </button>
            <button style={{ ...btnGold, background: "transparent", border: `1px solid ${GOLD}`, color: GOLD }} onClick={() => scrollTo("areas")}>
              Conocé nuestras áreas <ArrowRight size={16} />
            </button>
          </div>
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
              <article key={i} style={{ background: BG_PRIMARY, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 28, transition: "border-color 0.3s" }}
                onMouseOver={e => e.currentTarget.style.borderColor = GOLD_DIM} onMouseOut={e => e.currentTarget.style.borderColor = BORDER}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ background: `rgba(201,168,76,0.12)`, color: GOLD, padding: "4px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600, fontFamily: "system-ui, sans-serif" }}>{post.tag}</span>
                  <span style={{ color: TEXT_MUTED, fontSize: 12, fontFamily: "system-ui, sans-serif" }}>{post.date}</span>
                </div>
                <h3 style={{ color: "#fff", fontSize: 17, fontWeight: 700, margin: "0 0 10px", lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ color: TEXT_MUTED, fontSize: 14, lineHeight: 1.6, margin: 0, fontFamily: "system-ui, sans-serif" }}>{post.excerpt}</p>
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
      <a href="https://wa.me/5491138207360" target="_blank" rel="noopener noreferrer"
       onClick={() => { if (window.gtag_report_conversion) window.gtag_report_conversion(); }}
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 100,
          width: 60, height: 60, borderRadius: "50%",
          background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 16px rgba(37,211,102,0.4)", cursor: "pointer",
          transition: "transform 0.2s, box-shadow 0.2s", textDecoration: "none",
        }}
        onMouseOver={e => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,211,102,0.5)"; }}
        onMouseOut={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,211,102,0.4)"; }}
      >
        <svg viewBox="0 0 32 32" width="32" height="32" fill="#fff">
          <path d="M16.004 2.667A13.28 13.28 0 0 0 2.667 15.924a13.17 13.17 0 0 0 1.795 6.65L2.667 29.333l7.003-1.835A13.28 13.28 0 0 0 16.004 29.2c7.352 0 13.33-5.97 13.33-13.276 0-7.307-5.978-13.257-13.33-13.257Zm0 24.29a11.01 11.01 0 0 1-5.612-1.537l-.403-.239-4.177 1.095 1.114-4.07-.263-.418A10.93 10.93 0 0 1 4.95 15.924c0-6.09 4.96-11.043 11.054-11.043 6.094 0 11.047 4.953 11.047 11.043 0 6.097-4.953 11.033-11.047 11.033Zm6.063-8.27c-.332-.167-1.97-.971-2.276-1.082-.306-.111-.528-.167-.75.167-.222.333-.862 1.082-1.056 1.305-.195.222-.389.25-.722.083-.333-.167-1.405-.518-2.676-1.65-.989-.881-1.656-1.97-1.85-2.303-.195-.333-.021-.514.146-.68.15-.148.333-.389.5-.583.167-.195.222-.333.333-.556.111-.222.056-.417-.028-.583-.083-.167-.75-1.806-1.028-2.472-.27-.649-.546-.562-.75-.572-.194-.009-.417-.011-.639-.011a1.225 1.225 0 0 0-.889.417c-.306.333-1.166 1.138-1.166 2.777 0 1.639 1.194 3.222 1.36 3.444.167.222 2.35 3.59 5.695 5.034.796.344 1.417.549 1.902.703.799.254 1.526.218 2.1.132.641-.096 1.971-.806 2.249-1.583.278-.778.278-1.445.194-1.584-.083-.139-.305-.222-.638-.389Z"/>
        </svg>
      </a>
    </div>
  );
}

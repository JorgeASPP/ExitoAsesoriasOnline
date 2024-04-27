
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import "../styles/sa.css"; // Importa los estilos CSS

// Estilos para el PDF
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    text: {
        fontSize: 14,
        marginBottom: 5,
    },
});

function MyDocument({ sesionesAgendadas }) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.title}>Reporte de Sesiones Agendadas</Text>
                {sesionesAgendadas.map(sesion => (
                    <View key={sesion.id} style={{ marginBottom: 10 }}>
                        <Text style={styles.text}>Fecha: {sesion.fecha}</Text>
                        <Text style={styles.text}>Hora: {sesion.hora}</Text>
                        <Text style={styles.text}>Tutor: {sesion.tutor}</Text>
                    </View>
                ))}
            </Page>
        </Document>
    );
}

function SesionesAgendadas() {
    const [nuevaSesion, setNuevaSesion] = useState({
        fecha: '',
        hora: '',
        tutor: ''
    });
    const [sesionesAgendadas, setSesionesAgendadas] = useState([
        { id: 1, fecha: '2024-04-19', hora: '10:00', tutor: 'Juan' },
        { id: 2, fecha: '2024-04-20', hora: '15:00', tutor: 'María' },
        { id: 3, fecha: '2024-04-21', hora: '09:00', tutor: 'Pedro' }
    ]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNuevaSesion(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const agregarNuevaSesion = () => {
        const id = sesionesAgendadas.length + 1;
        setSesionesAgendadas([...sesionesAgendadas, { id, ...nuevaSesion }]);
        setNuevaSesion({ fecha: '', hora: '', tutor: '' });
    };

    const cancelarSesion = (id) => {
        setSesionesAgendadas(sesionesAgendadas.filter(sesion => sesion.id !== id));
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Sesiones Agendadas</h1>
                <div className="sesiones-agendadas">
                    {sesionesAgendadas.map(sesion => (
                        <div key={sesion.id} className="sesion-card">
                            <h2>{sesion.fecha}</h2>
                            <p>Hora: {sesion.hora}</p>
                            <p>Tutor: {sesion.tutor}</p>
                            <button onClick={() => cancelarSesion(sesion.id)} className="btn-cancelar">Cancelar</button>
                        </div>
                    ))}
                </div>
                <form className="form-container">
                    <h2>Agregar Nueva Sesión</h2>
                    <label className="small-input">Fecha:</label>
                    <input type="date" name="fecha" value={nuevaSesion.fecha} onChange={handleInputChange} className="small-input" />
                    <label className="small-input">Hora:</label>
                    <input type="time" name="hora" value={nuevaSesion.hora} onChange={handleInputChange} className="small-input" />
                    <label className="small-input">Tutor:</label>
                    <input type="text" name="tutor" value={nuevaSesion.tutor} onChange={handleInputChange} className="small-input" />
                    <button type="button" onClick={agregarNuevaSesion} className="btn-agregar">Agregar</button>
                </form>
                <div className="report-btn">
                    <PDFDownloadLink document={<MyDocument sesionesAgendadas={sesionesAgendadas} />} fileName="sesiones_agendadas.pdf">
                        {({ blob, url, loading, error }) => (
                            <button className={`generate-report-button ${loading ? 'loading' : ''}`}>
                                {loading ? 'Generando reporte...' : 'Generar Reporte'}
                            </button>
                        )}
                    </PDFDownloadLink>
                </div>
        </div>
        <Footer />
    </>
);  
}

export default SesionesAgendadas;
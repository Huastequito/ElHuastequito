const HomeInfo = require('../models/HomeInfo');

// Mostrar formulario de edición de información de inicio
exports.getHomeInfo = async (req, res) => {
  try {
    let homeInfo = await HomeInfo.findOne();
    // Si no existe, no lo crees aquí, solo envía un objeto vacío para el formulario
    if (!homeInfo) {
      homeInfo = { nombreLocal: '', slogan: '', descripcion: '', telefono: '', direccion: '', email: '' };
    }
    res.render('admin/homeinfo', { title: 'Editar Inicio', homeInfo });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener la información de inicio');
  }
};

// Actualizar información de inicio
exports.updateHomeInfo = async (req, res) => {
  try {
    const { nombreLocal, slogan, descripcion, telefono, direccion, email } = req.body;
    let homeInfo = await HomeInfo.findOne();
    if (!homeInfo) {
      // Solo crea si los campos requeridos están presentes
      homeInfo = new HomeInfo({ nombreLocal, slogan, descripcion, telefono, direccion, email });
    } else {
      homeInfo.nombreLocal = nombreLocal;
      homeInfo.slogan = slogan;
      homeInfo.descripcion = descripcion;
      homeInfo.telefono = telefono;
      homeInfo.direccion = direccion;
      homeInfo.email = email;
    }
    await homeInfo.save();
    res.redirect('/admin/homeinfo');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar la información de inicio');
  }
};

module.exports = function accessController(req, res) {
  const { requiredRole } = req.body;
  const { role } = req.user;

  if (!requiredRole) return res.status(400).json({ message: 'Rol requerido no proporcionado.' });

  if (role === requiredRole || (requiredRole === 'estudiante' && role === 'admin') || (requiredRole === 'director' && role === 'admin'))
    return res.status(200).json({ access: true, message: 'Acceso permitido.' });

  return res.status(403).json({ message: 'Acceso denegado. Rol insuficiente.' });
};

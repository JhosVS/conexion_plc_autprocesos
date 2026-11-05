// Configuracion de Node-RED para Render
const settings = {
  flowFile: 'flows.json',
  uiPort: process.env.PORT || 1880,
  credentialSecret: process.env.CRED_SECRET || false,
};

// Si defines ADMIN_USER y ADMIN_HASH en Render, el editor pedira usuario y contrasena.
// El dashboard (/ui) sigue siendo visible sin contrasena.
if (process.env.ADMIN_USER && process.env.ADMIN_HASH) {
  settings.adminAuth = {
    type: 'credentials',
    users: [{
      username: process.env.ADMIN_USER,
      password: process.env.ADMIN_HASH,
      permissions: '*',
    }],
  };
}

module.exports = settings;
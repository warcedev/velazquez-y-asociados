// Este script ayuda a optimizar el build para Vercel
const fs = require('fs');
const path = require('path');

console.log('⚡ Optimizando build para Vercel...');

// Verificar que dist existe
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  console.log('⚠️  No se encontró la carpeta dist. Ejecuta npm run build primero.');
  process.exit(1);
}

// Crear _redirects para SPA
const redirectsContent = `/* /index.html 200`;
fs.writeFileSync(path.join(distPath, '_redirects'), redirectsContent);

console.log('✅ Build optimizado para Vercel');
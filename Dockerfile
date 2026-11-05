FROM nodered/node-red:latest

# Nodos que usa el dashboard del semaforo
RUN npm install --unsafe-perm --no-update-notifier --no-fund --omit=dev \
    node-red-dashboard node-red-contrib-ui-led

# Configuracion y flujo
COPY settings.js /data/settings.js
COPY flows.json /data/flows.json
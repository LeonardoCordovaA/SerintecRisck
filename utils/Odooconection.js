
import Odoo from 'react-native-odoo-promise-based'

const odoo = new Odoo({
    host: '161.97.91.129',
    port: 8067, /* Defaults to 80 if not specified */
    database: 'Serintec',
    username: 'YOUR_USERNAME', /* Optional if using a stored session_id */
    password: 'YOUR_PASSWORD', /* Optional if using a stored session_id */
    sid: 'YOUR_SESSION_ID', /* Optional if using username/password */
    protocol: 'https' /* Defaults to http if not specified */
  })
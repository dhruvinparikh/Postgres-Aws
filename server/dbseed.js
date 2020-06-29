const { Client } = require('pg');
var connectionString = "postgres://postgres:4qOmV5ZyNq2HnTTw0wdF@testing.cmi6xmxq1wpt.us-east-1.rds.amazonaws.com:5432/production";
const client = new Client({
    connectionString: connectionString
});
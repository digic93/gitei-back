# gitei-back

## Project setup
```
npm install
```

### run server for development
```
node server.js 
```

### Script base de datos
```MYSQL
CREATE TABLE `personas` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `cedula` bigint(20) NOT NULL,
  `nombre` varchar(100) CHARACTER SET latin1 NOT NULL DEFAULT '',
  `apellido` varchar(100) CHARACTER SET latin1 NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `cedula_unique` (`cedula`),
  KEY `cedula_index` (`cedula`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
```

### Archivo configuarcion base de datos
gitei-back/app/config/db.config.js

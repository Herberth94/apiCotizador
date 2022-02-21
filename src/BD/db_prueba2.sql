-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3307
-- Tiempo de generación: 21-02-2022 a las 21:15:52
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_prueba2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `am`
--

CREATE TABLE `am` (
  `am_id` bigint(20) NOT NULL,
  `am_desc_fab` float NOT NULL,
  `am_margen_ganancia` float NOT NULL,
  `am_id_sv_pd` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `categoria_id` int(10) NOT NULL,
  `categoria_nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `cliente_id` bigint(20) NOT NULL,
  `cliente_nombre` varchar(255) NOT NULL,
  `cliente_razon_social` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `marca_id` int(10) NOT NULL,
  `marca_nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `moneda`
--

CREATE TABLE `moneda` (
  `moneda_id` int(10) NOT NULL,
  `moneda_nombre` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partida`
--

CREATE TABLE `partida` (
  `partida_id` bigint(20) NOT NULL,
  `partida_nombre` varchar(255) NOT NULL,
  `partida_id_serv_prod` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `proveedor_id` int(10) NOT NULL,
  `proveedor_nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `proyecto_id` bigint(20) NOT NULL,
  `proyecto_clave` varchar(255) NOT NULL,
  `proyecto_descripcion` varchar(255) NOT NULL,
  `proyecto_id_partida` bigint(20) NOT NULL,
  `proyecto_valor_dolar` float NOT NULL,
  `proyecto_id_cliente` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio_producto`
--

CREATE TABLE `servicio_producto` (
  `sv_pd_id` bigint(20) NOT NULL,
  `sv_pd_no_parte` bigint(20) NOT NULL,
  `sv_pd_descripcion` varchar(255) NOT NULL,
  `sv_pd_meses` float NOT NULL,
  `sv_pd_semanas` float NOT NULL,
  `sv_pd_cantidad` int(20) NOT NULL,
  `sv_pd_precio_l` decimal(20,3) NOT NULL,
  `sv_pd_precio_u` decimal(20,3) NOT NULL,
  `sv_pd_desc_cli` float NOT NULL,
  `sv_pd_total_mxn` varchar(10) NOT NULL,
  `sv_pd_total_usd` decimal(20,3) NOT NULL,
  `sv_pd_total_boom` decimal(20,3) NOT NULL,
  `sv_pd_id_moneda` int(10) NOT NULL,
  `sv_pd_id_marca` int(10) NOT NULL,
  `sv_pd_id_provedor` int(10) NOT NULL,
  `sv_pd_id_categoria` int(10) NOT NULL,
  `sv_pd_comentarios` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `usuario_id` bigint(20) NOT NULL,
  `usuario_rol` varchar(20) NOT NULL,
  `usuario_ correo` varchar(255) NOT NULL,
  `usuario_contra` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `us_cli`
--

CREATE TABLE `us_cli` (
  `us_cli_id` bigint(20) NOT NULL,
  `us_cli_id_cliente` bigint(20) NOT NULL,
  `us_cli_id_usuario` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `am`
--
ALTER TABLE `am`
  ADD PRIMARY KEY (`am_id`),
  ADD KEY `fk_am_id_sv_pd` (`am_id_sv_pd`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`categoria_id`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`cliente_id`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`marca_id`);

--
-- Indices de la tabla `moneda`
--
ALTER TABLE `moneda`
  ADD PRIMARY KEY (`moneda_id`);

--
-- Indices de la tabla `partida`
--
ALTER TABLE `partida`
  ADD PRIMARY KEY (`partida_id`),
  ADD KEY `fk_partida_id_serv_prod` (`partida_id_serv_prod`);

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`proveedor_id`);

--
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD PRIMARY KEY (`proyecto_id`),
  ADD KEY `fk_proyecto_id_partida` (`proyecto_id_partida`),
  ADD KEY `fk_proyecto_id_cliente` (`proyecto_id_cliente`);

--
-- Indices de la tabla `servicio_producto`
--
ALTER TABLE `servicio_producto`
  ADD PRIMARY KEY (`sv_pd_id`),
  ADD KEY `fk_sv_pd_id_categoria` (`sv_pd_id_categoria`),
  ADD KEY `fk_sv_pd_id_marca` (`sv_pd_id_marca`),
  ADD KEY `fk_sv_pd_id_moneda` (`sv_pd_id_moneda`),
  ADD KEY `fk_sv_pd_id_proveedor` (`sv_pd_id_provedor`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario_id`);

--
-- Indices de la tabla `us_cli`
--
ALTER TABLE `us_cli`
  ADD PRIMARY KEY (`us_cli_id`),
  ADD KEY `fk_us_cli_id_usuario` (`us_cli_id_usuario`),
  ADD KEY `fk_us_cli_id_cliente` (`us_cli_id_cliente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `am`
--
ALTER TABLE `am`
  MODIFY `am_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `categoria_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `cliente_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `marca_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `moneda`
--
ALTER TABLE `moneda`
  MODIFY `moneda_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `partida`
--
ALTER TABLE `partida`
  MODIFY `partida_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  MODIFY `proveedor_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `proyecto_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `servicio_producto`
--
ALTER TABLE `servicio_producto`
  MODIFY `sv_pd_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `usuario_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `us_cli`
--
ALTER TABLE `us_cli`
  MODIFY `us_cli_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `am`
--
ALTER TABLE `am`
  ADD CONSTRAINT `fk_am_id_sv_pd` FOREIGN KEY (`am_id_sv_pd`) REFERENCES `servicio_producto` (`sv_pd_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `partida`
--
ALTER TABLE `partida`
  ADD CONSTRAINT `fk_partida_id_serv_prod` FOREIGN KEY (`partida_id_serv_prod`) REFERENCES `servicio_producto` (`sv_pd_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD CONSTRAINT `fk_proyecto_id_cliente` FOREIGN KEY (`proyecto_id_cliente`) REFERENCES `cliente` (`cliente_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_proyecto_id_partida` FOREIGN KEY (`proyecto_id_partida`) REFERENCES `partida` (`partida_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `servicio_producto`
--
ALTER TABLE `servicio_producto`
  ADD CONSTRAINT `fk_sv_pd_id_categoria` FOREIGN KEY (`sv_pd_id_categoria`) REFERENCES `categoria` (`categoria_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_sv_pd_id_marca` FOREIGN KEY (`sv_pd_id_marca`) REFERENCES `marca` (`marca_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_sv_pd_id_moneda` FOREIGN KEY (`sv_pd_id_moneda`) REFERENCES `moneda` (`moneda_id`),
  ADD CONSTRAINT `fk_sv_pd_id_proveedor` FOREIGN KEY (`sv_pd_id_provedor`) REFERENCES `proveedor` (`proveedor_id`);

--
-- Filtros para la tabla `us_cli`
--
ALTER TABLE `us_cli`
  ADD CONSTRAINT `fk_us_cli_id_cliente` FOREIGN KEY (`us_cli_id_cliente`) REFERENCES `cliente` (`cliente_id`),
  ADD CONSTRAINT `fk_us_cli_id_usuario` FOREIGN KEY (`us_cli_id_usuario`) REFERENCES `usuario` (`usuario_id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

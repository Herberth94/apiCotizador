-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-01-2022 a las 00:03:51
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `am`
--

CREATE TABLE `am` (
  `clave_proyecto` varchar(255) NOT NULL,
  `valor_dolar` float NOT NULL,
  `id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `am`
--

INSERT INTO `am` (`clave_proyecto`, `valor_dolar`, `id`) VALUES
('2303', 20, 1),
('4560', 20, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `am_datos`
--

CREATE TABLE `am_datos` (
  `descripcion` varchar(255) NOT NULL,
  `total_mxn` decimal(20,3) NOT NULL,
  `total_usd` decimal(20,3) NOT NULL,
  `total_moneda_bom` decimal(20,3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `nombre_cliente` varchar(255) NOT NULL,
  `razon_social` varchar(255) NOT NULL,
  `id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`nombre_cliente`, `razon_social`, `id`) VALUES
('Delfos', '369', 2),
('Instituto Politecnico ', 'IPN', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `costos_indirectos`
--

CREATE TABLE `costos_indirectos` (
  `descripcion` varchar(25) NOT NULL,
  `total_venta` decimal(20,3) NOT NULL,
  `porcentaje` float NOT NULL,
  `total_final` decimal(20,3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `margen_ganancia`
--

CREATE TABLE `margen_ganancia` (
  `descripcion` varchar(255) NOT NULL,
  `costo` decimal(20,3) NOT NULL,
  `margen_ganancia` float NOT NULL,
  `precio_venta` decimal(20,3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proporcionalidad`
--

CREATE TABLE `proporcionalidad` (
  `descripcion` varchar(255) NOT NULL,
  `precio_venta` decimal(20,3) NOT NULL,
  `proporcional_mesa_ayuda` decimal(20,3) NOT NULL,
  `total_proporcional` decimal(20,3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ptn_bom`
--

CREATE TABLE `ptn_bom` (
  `clave_proyecto` varchar(255) NOT NULL,
  `descripcion_proyecto` varchar(255) NOT NULL,
  `nombre_cliente` varchar(255) NOT NULL,
  `id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ptn_bom`
--

INSERT INTO `ptn_bom` (`clave_proyecto`, `descripcion_proyecto`, `nombre_cliente`, `id`) VALUES
('4560', 'Tenable.io', 'Instituto Politecnico Nacional', 21),
('2303', 'prueba', 'Delfos', 50);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ptn_bom_datos`
--

CREATE TABLE `ptn_bom_datos` (
  `partida` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `meses` float NOT NULL,
  `semanas` float NOT NULL,
  `cantidad` int(20) NOT NULL,
  `precio_lista` int(20) NOT NULL,
  `precio_unitario` decimal(20,3) NOT NULL,
  `descuento` decimal(20,3) NOT NULL,
  `moneda` varchar(10) NOT NULL,
  `total_mxn` decimal(20,3) NOT NULL,
  `total_usd` decimal(20,3) NOT NULL,
  `marca` varchar(255) NOT NULL,
  `proveedor` varchar(255) NOT NULL,
  `comentarios` varchar(255) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `n_parte` varchar(20) NOT NULL,
  `clave_proyecto` varchar(255) NOT NULL,
  `id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ptn_bom_datos`
--

INSERT INTO `ptn_bom_datos` (`partida`, `descripcion`, `meses`, `semanas`, `cantidad`, `precio_lista`, `precio_unitario`, `descuento`, `moneda`, `total_mxn`, `total_usd`, `marca`, `proveedor`, `comentarios`, `categoria`, `n_parte`, `clave_proyecto`, `id`) VALUES
('Partida 1', 'routers', 1, 4, 1, 100, '100.000', '0.000', 'MXN', '100.000', '0.000', '---', '---', '---', 'Capacitacion', '1', '01', 17),
('Partida 1', 'pc', 8, 8, 1, 300, '270.000', '10.000', 'MXN', '270.000', '0.000', '---', '---', '---', 'Capacitacion', '1', '01', 18),
('Partida 2', 'producto 3', 2, 8, 5, 250, '250.000', '0.000', 'MXN', '1250.000', '0.000', 'SN', 'SN', 'SN', 'Accesorios', '1', '01', 19),
('part', 's', 2, 2, 1, 200, '200.000', '0.000', 'MXN', '200.000', '0.000', '---', '---', '---', 'Equipamiento', '1', '03', 20),
('Licenciamineto tenable', 'ser-nes', 12, 0, 1, 2990, '2840.500', '5.000', 'USD', '2840.500', '0.000', 'table', 'grupo dice', '---', 'Licencias', '1', '05', 21),
('Licenciamineto tenable', 'soporte avanzado', 12, 0, 1, 400, '360.000', '10.000', 'USD', '360.000', '0.000', 'tenable', 'grupo dice', 'sn', 'Soporte', '1', '05', 22),
('PARTIDA 1', 'PRUEBA 1', 1, 8, 1, 200, '200.000', '0.000', 'MXN', '200.000', '0.000', 'S/N', 'S/N', 'S/N', 'Mesa de Ayuda', '1A', '2303', 29),
('PARTIDA 1', 'PRUEBA 2', 1, 20, 1, 351, '350.500', '0.000', 'MXN', '350.500', '0.000', 'S/N', 'S/N', 'S/N', 'Equipamiento', '1B', '2303', 30),
('PARTIDA 1', 'PRUEBA 3', 1, 8, 1, 100, '100.000', '0.000', 'MXN', '100.000', '0.000', 'S/N', 'S/N', 'S/N', 'Equipamiento', '1C', '2303', 31),
('PARTIDA 1', 'PRUEBA 4', 3, 0, 1, 100, '100.000', '0.000', 'USD', '0.000', '100.000', 'S/N', 'S/N', 'S/N', 'Equipamiento', '1D', '2303', 32),
('PARTIDA 2', 'PRUEBA 1', 1, 0, 1, 999, '999.000', '0.000', 'USD', '0.000', '999.000', 'S/N', 'S/N', 'S/N', 'Equipamiento', '2A', '2303', 33),
('PARTIDA 2', 'PRUEBA 2', 0, 0, 1, 100, '50.000', '50.000', 'USD', '0.000', '50.000', 'S/N', 'S/N', 'S/N', 'Equipamiento', '2B', '2303', 34),
('PARTIDA 2', 'PRUEBA 3', 1, 9, 1, 99, '99.000', '0.000', 'MXN', '99.000', '0.000', 'S/N', 'S/N', 'S/N', 'Licencias', '2C', '2303', 35),
('Licenciamiento Tenable', 'Licencia Tenable.io: 1000 Asstes', 12, 0, 1, 3800, '3420.000', '10.000', 'USD', '0.000', '3420.000', 'Tenable', 'Grupo DICE', 'S/N', 'Licencias', 'LIC-TENIO', '4560', 36),
('Licenciamiento Tenable', 'Licencia Tenable LUMIN: 1000 Asstes', 12, 0, 1, 2000, '1200.000', '40.000', 'USD', '0.000', '1200.000', 'Tenable', 'Grupo DICE', 'S/N', 'Licencias', 'LIC-TLUM', '4560', 37),
('Servicios PTN', 'Servicio de implementación Tenable.io & Tenable LUMIN', 0, 0, 1, 3050, '3050.000', '0.000', 'USD', '0.000', '3050.000', 'PTN', 'PTN', 'S/N', 'Implementacion PTN', 'PTN-SRV', '4560', 38),
('Mesa de Ayudas', 'Mesa de ayudas por un a?o', 12, 0, 1, 77000, '77000.000', '0.000', 'MXN', '77000.000', '0.000', 'PTN', 'PTN', 'S/N', 'Mesa de Ayuda', 'PTN-HD', '4560', 39),
('ud', 'bd', 1, 9, 1, 200, '200.000', '0.000', 'MXN', '200.000', '0.000', 'dkbj', 'dkb', 'kdjb', 'Equipamiento', '8eu', '12', 44),
('ud', 'dejwbkd', 1, 10, 2, 200, '200.000', '0.000', 'USD', '0.000', '400.000', 'S/N', 'S/N', 'S/N', 'Equipamiento', 'ke', '12', 45),
('ud', 'edbkj', 8, 9, 1, 100, '100.000', '0.000', 'MXN', '100.000', '0.000', 'S/N', 'S/N', 'S/N', 'Equipamiento', 'eiue', '12', 46);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `rol` varchar(50) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`rol`, `correo`, `contrasena`, `id`) VALUES
('Administrador', 'oscar', '1234', 4),
('Administrador', 'oscar.castaneda', 'Palotinto2012', 10);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `am`
--
ALTER TABLE `am`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ptn_bom`
--
ALTER TABLE `ptn_bom`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ptn_bom_datos`
--
ALTER TABLE `ptn_bom_datos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `am`
--
ALTER TABLE `am`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `ptn_bom`
--
ALTER TABLE `ptn_bom`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `ptn_bom_datos`
--
ALTER TABLE `ptn_bom_datos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-04-2022 a las 07:26:01
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
-- Base de datos: `db_cotizador`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `am`
--

CREATE TABLE `am` (
  `am_id` bigint(20) NOT NULL,
  `am_id_partida` bigint(20) DEFAULT NULL,
  `am_desc_cliente` float DEFAULT 0,
  `am_margen_ganancia` float DEFAULT 32,
  `am_cantidad` int(10) DEFAULT 1,
  `am_descuento_fabrica` float DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `am`
--

INSERT INTO `am` (`am_id`, `am_id_partida`, `am_desc_cliente`, `am_margen_ganancia`, `am_cantidad`, `am_descuento_fabrica`) VALUES
(17, 25, 0, 32, 1, 0),
(18, 27, 0, 32, 1, 0),
(19, 29, 0, 32, 1, 0),
(20, 30, 0, 32, 1, 0),
(21, 31, 0, 32, 1, 0),
(22, 46, 0, 32, 1, 0),
(23, 47, 0, 32, 1, 0),
(24, 48, 0, 32, 1, 0),
(25, 49, 0, 32, 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `am_cats`
--

CREATE TABLE `am_cats` (
  `amc_id` int(11) NOT NULL,
  `amc_id_proyecto` bigint(20) NOT NULL,
  `amc_id_cats` bigint(20) NOT NULL,
  `amc_desc_cliente` float NOT NULL DEFAULT 0,
  `amc_margen_ganancia` float NOT NULL DEFAULT 32,
  `amc_cantidad` int(3) NOT NULL DEFAULT 1,
  `amc_desc_fabrica` float NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `am_cats`
--

INSERT INTO `am_cats` (`amc_id`, `amc_id_proyecto`, `amc_id_cats`, `amc_desc_cliente`, `amc_margen_ganancia`, `amc_cantidad`, `amc_desc_fabrica`) VALUES
(2, 81, 1, 0, 32, 1, 0),
(3, 81, 2, 0, 32, 1, 0),
(4, 81, 3, 0, 32, 1, 0),
(5, 81, 4, 0, 32, 1, 0),
(6, 71, 1, 0, 32, 1, 0),
(7, 71, 2, 0, 32, 1, 0),
(8, 71, 3, 0, 32, 1, 0),
(9, 71, 4, 0, 32, 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `categoria_id` int(10) NOT NULL,
  `categoria_nombre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`categoria_id`, `categoria_nombre`) VALUES
(1, 'Tecnologia principal '),
(2, 'Subtecnolgia'),
(3, 'Equipamiento'),
(4, 'Licencia'),
(5, 'Soporte'),
(6, 'Implementacion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_ci`
--

CREATE TABLE `categorias_ci` (
  `cci_id` bigint(20) NOT NULL,
  `cci_nombre` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias_ci`
--

INSERT INTO `categorias_ci` (`cci_id`, `cci_nombre`) VALUES
(1, 'Comisiones'),
(2, 'Riesgo'),
(3, 'Fianza'),
(4, 'seguros y fletes'),
(5, 'Costos administrativos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_c_a_sptn_ma`
--

CREATE TABLE `categorias_c_a_sptn_ma` (
  `cat_id` bigint(20) NOT NULL,
  `cat_nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias_c_a_sptn_ma`
--

INSERT INTO `categorias_c_a_sptn_ma` (`cat_id`, `cat_nombre`) VALUES
(1, 'Capacitacion'),
(2, 'Accesorios '),
(3, 'Servicios PTN'),
(4, 'Mesa de ayuda');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_datos`
--

CREATE TABLE `categorias_datos` (
  `cd_id` bigint(20) NOT NULL,
  `cd_id_cats` bigint(20) DEFAULT NULL,
  `cd_no_parte` text DEFAULT NULL,
  `cd_descripcion` text DEFAULT NULL,
  `cd_meses` int(3) DEFAULT NULL,
  `cd_semanas` int(3) DEFAULT NULL,
  `cd_cantidad` int(3) DEFAULT NULL,
  `cd_id_precio` bigint(20) DEFAULT NULL,
  `cd_comentarios` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias_datos`
--

INSERT INTO `categorias_datos` (`cd_id`, `cd_id_cats`, `cd_no_parte`, `cd_descripcion`, `cd_meses`, `cd_semanas`, `cd_cantidad`, `cd_id_precio`, `cd_comentarios`) VALUES
(115, 1, '', 'Capacitacion de fabricante para dos peronas', 0, 0, 1, 199, ''),
(116, 2, '', 'Herramienta y accesorios de montaje', 0, 0, 1, 200, ''),
(117, 3, '', 'Instalacion y Configuracion', 0, 0, 1, 201, ''),
(118, 4, '', 'Mesa de ayuda por 1 año', 0, 0, 1, 202, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `cliente_id` int(11) NOT NULL,
  `nombre_cliente` varchar(50) NOT NULL,
  `razon_social` varchar(50) NOT NULL,
  `telefono` bigint(10) DEFAULT NULL,
  `cliente_direccion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`cliente_id`, `nombre_cliente`, `razon_social`, `telefono`, `cliente_direccion`) VALUES
(13, 'Delfos369', 'S.A. de C.V.', 55, 'Santa fe');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colaboradores`
--

CREATE TABLE `colaboradores` (
  `colab_id` bigint(20) NOT NULL,
  `colab_id_usuario` bigint(20) NOT NULL,
  `colab_id_proyecto` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `costos_indirectos`
--

CREATE TABLE `costos_indirectos` (
  `ci_id` bigint(20) NOT NULL,
  `ci_id_cci` bigint(20) NOT NULL,
  `ci_porcentaje` float DEFAULT NULL,
  `ci_id_proyecto` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `costos_indirectos`
--

INSERT INTO `costos_indirectos` (`ci_id`, `ci_id_cci`, `ci_porcentaje`, `ci_id_proyecto`) VALUES
(13, 1, 2, 71),
(14, 2, 1, 71),
(15, 3, 5, 71),
(16, 4, 1, 71),
(17, 5, 4, 71),
(18, 1, 2, 81),
(19, 2, 1, 81),
(20, 3, 5, 81),
(21, 4, 1, 81),
(22, 5, 4, 81);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `marca_id` bigint(20) NOT NULL,
  `marca_nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`marca_id`, `marca_nombre`) VALUES
(25, 'PTN'),
(26, 'AXIS'),
(27, 'CAMBIUM NETWORKS'),
(28, 'SYSCOM VIDEO'),
(29, 'EPCOM POWERLINE'),
(30, 'PANDUIT'),
(31, 'SIEMON'),
(32, 'NUTANIX'),
(33, 'CISCO'),
(34, 'GENERICO'),
(35, 'NUTANIX'),
(36, 'GENERICO'),
(37, 'MICROSOFT'),
(38, 'HUAWEI'),
(39, 'LENEL ONGUARD'),
(40, 'NUTANIX'),
(41, 'LENOVO'),
(42, 'HUAWEI'),
(43, 'PA NDUIT'),
(44, 'EPCOM POWERLINE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `moneda`
--

CREATE TABLE `moneda` (
  `moneda_id` int(10) NOT NULL,
  `moneda_nombre` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `moneda`
--

INSERT INTO `moneda` (`moneda_id`, `moneda_nombre`) VALUES
(1, 'MXN'),
(2, 'USD');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partida`
--

CREATE TABLE `partida` (
  `partida_id` bigint(20) NOT NULL,
  `partida_nombre` varchar(255) DEFAULT NULL,
  `partida_descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `partida`
--

INSERT INTO `partida` (`partida_id`, `partida_nombre`, `partida_descripcion`) VALUES
(25, 'Camaras IP', 'Camaras IP'),
(27, 'Servidores VMS', 'Servidores VMS'),
(29, 'Servidores Control de Acceso', 'Servidores Control de Acceso'),
(30, 'Equipo de Cómputo y comunicación', 'Equipo de Cómputo y comunicación'),
(31, 'Mantenimiento preventivo', 'Mantenimiento preventivo'),
(41, 'xx', 'xx'),
(42, 'uu', 'uiu'),
(43, 'uuy', 'tgd'),
(44, 'rrrr', 'rrr'),
(45, 'qqqw', 'qqqw'),
(46, 'Switches', 'Switches'),
(47, 'Routers', 'Routers'),
(48, 'Servidores', 'Servidores'),
(49, 'Consultoria', 'Consultoria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pp`
--

CREATE TABLE `pp` (
  `pp_id` bigint(20) NOT NULL,
  `pp_id_proyecto` bigint(20) DEFAULT NULL,
  `pp_id_partida` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pp`
--

INSERT INTO `pp` (`pp_id`, `pp_id_proyecto`, `pp_id_partida`) VALUES
(28, 71, 25),
(30, 71, 27),
(32, 71, 29),
(33, 71, 30),
(34, 71, 31),
(44, 70, 41),
(45, 70, 42),
(46, 75, 43),
(47, 76, 44),
(48, 80, 45),
(49, 81, 46),
(50, 81, 47),
(51, 81, 48),
(52, 81, 49);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `precio`
--

CREATE TABLE `precio` (
  `precio_id` bigint(20) NOT NULL,
  `precio_lista` decimal(20,3) DEFAULT NULL,
  `precio_unitario` decimal(20,3) DEFAULT NULL,
  `precio_descuento` float DEFAULT NULL,
  `precio_total` decimal(20,3) DEFAULT NULL,
  `precio_id_moneda` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `precio`
--

INSERT INTO `precio` (`precio_id`, `precio_lista`, `precio_unitario`, `precio_descuento`, `precio_total`, `precio_id_moneda`) VALUES
(70, '3409.000', '3409.000', 0, '180677.000', 2),
(71, '4949.000', '4949.000', 0, '9898.000', 2),
(72, '3299.000', '3299.000', 0, '32990.000', 2),
(73, '1429.000', '1429.000', 0, '82882.000', 2),
(74, '1153.000', '1153.000', 0, '8071.000', 2),
(75, '1077.000', '1077.000', 0, '23694.000', 2),
(76, '714.000', '714.000', 0, '3570.000', 2),
(77, '736.000', '736.000', 0, '1472.000', 2),
(78, '6599.000', '6599.000', 0, '131980.000', 2),
(79, '14299.000', '14299.000', 0, '100093.000', 2),
(80, '109.000', '109.000', 0, '5777.000', 2),
(81, '439.000', '439.000', 0, '878.000', 2),
(82, '153.000', '153.000', 0, '306.000', 2),
(83, '439.000', '439.000', 0, '878.000', 2),
(84, '109.000', '109.000', 0, '1090.000', 2),
(85, '94.000', '94.000', 0, '5452.000', 2),
(86, '94.000', '94.000', 0, '1880.000', 2),
(87, '219.000', '219.000', 0, '1533.000', 2),
(88, '219.000', '219.000', 0, '1533.000', 2),
(89, '329.000', '329.000', 0, '2303.000', 2),
(90, '339.000', '339.000', 0, '19662.000', 2),
(91, '65.000', '65.000', 0, '3640.000', 2),
(92, '32.000', '32.000', 0, '4800.000', 2),
(93, '12889.680', '12889.680', 0, '51558.720', 1),
(94, '88022.380', '88022.380', 0, '176044.760', 1),
(95, '4642.140', '4642.140', 0, '46421.400', 1),
(96, '10057.870', '10057.870', 0, '804629.600', 1),
(97, '35277.890', '35277.890', 0, '2822231.200', 1),
(98, '193.600', '193.600', 0, '4840.000', 1),
(99, '215.280', '215.280', 0, '40042.080', 1),
(100, '10676.660', '10676.660', 0, '693982.900', 1),
(101, '22308.970', '22308.970', 0, '66926.910', 2),
(102, '19.570', '19.570', 0, '117.420', 2),
(103, '19.710', '19.710', 0, '78.840', 2),
(104, '22308.970', '22308.970', 0, '66926.910', 2),
(105, '19.570', '22308.970', 0, '133853.820', 2),
(106, '171.930', '171.930', 0, '31978.980', 1),
(107, '19.710', '17.710', 10.1471, '106.260', 2),
(108, '40.570', '40.570', 0, '243.420', 2),
(109, '0.010', '0.010', 0, '0.060', 2),
(110, '0.010', '0.010', 0, '0.480', 2),
(111, '0.010', '0.010', 0, '0.180', 2),
(112, '0.010', '0.010', 0, '0.060', 2),
(113, '0.010', '0.010', 0, '0.030', 2),
(114, '31.730', '31.730', 0, '190.380', 2),
(115, '14881.390', '14881.390', 0, '44644.170', 2),
(116, '5669.100', '5669.100', 0, '17007.300', 2),
(117, '341.120', '341.120', 0, '1023.360', 2),
(118, '0.010', '0.010', 0, '0.030', 2),
(119, '0.010', '0.010', 0, '0.030', 2),
(120, '0.010', '0.010', 0, '0.030', 2),
(121, '0.010', '0.010', 0, '0.010', 2),
(122, '5050.890', '5050.890', 0, '5050.890', 2),
(123, '152.430', '152.430', 0, '39631.800', 2),
(124, '56.930', '56.930', 0, '3757.380', 2),
(125, '27831.720', '27831.720', 0, '55663.440', 2),
(126, '103605.440', '103605.440', 0, '103605.440', 2),
(127, '10785.360', '10785.360', 0, '10785.360', 2),
(128, '3501.440', '3501.440', 0, '7002.880', 2),
(129, '7714.100', '7714.100', 0, '7714.100', 2),
(130, '667.000', '667.000', 0, '1334.000', 2),
(131, '8620.000', '8620.000', 0, '17240.000', 2),
(132, '250.000', '250.000', 0, '46500.000', 2),
(133, '250.000', '250.000', 0, '15000.000', 2),
(134, '667.000', '667.000', 0, '667.000', 2),
(135, '1150.000', '1150.000', 0, '10350.000', 2),
(136, '22308.970', '22308.970', 0, '44617.940', 2),
(137, '19.570', '19.570', 0, '78.280', 2),
(138, '19.710', '19.710', 0, '78.840', 2),
(139, '40.570', '40.570', 0, '162.280', 2),
(140, '0.010', '0.010', 0, '0.040', 2),
(141, '0.010', '0.010', 0, '0.320', 2),
(142, '0.010', '0.010', 0, '0.120', 2),
(143, '0.010', '0.010', 0, '0.040', 2),
(144, '0.010', '0.010', 0, '0.020', 2),
(145, '31.730', '31.730', 0, '126.920', 2),
(146, '14881.390', '14881.390', 0, '29762.780', 2),
(147, '5669.100', '5669.100', 0, '11338.200', 2),
(148, '341.120', '341.120', 0, '682.240', 2),
(149, '0.010', '0.010', 0, '0.020', 2),
(150, '0.010', '0.010', 0, '0.020', 2),
(151, '0.010', '0.010', 0, '0.020', 2),
(152, '0.010', '0.010', 0, '0.010', 2),
(153, '5050.890', '5050.890', 0, '5050.890', 2),
(154, '59412.140', '59412.140', 0, '534709.260', 1),
(155, '12899.000', '12899.000', 0, '116091.000', 1),
(156, '360.490', '360.490', 0, '3244.410', 1),
(157, '5557.410', '5557.410', 0, '50016.690', 1),
(158, '10514.200', '10514.200', 0, '283883.400', 1),
(159, '4109.600', '4109.600', 0, '110959.200', 1),
(160, '551.650', '551.650', 0, '4964.850', 1),
(161, '7600.000', '7600.000', 0, '38000.000', 2),
(162, '1000.000', '1000.000', 0, '5000.000', 2),
(163, '600.000', '600.000', 0, '3000.000', 2),
(164, '224.000', '224.000', 0, '2240.000', 2),
(165, '338.000', '338.000', 0, '1690.000', 2),
(166, '1368.000', '1368.000', 0, '6840.000', 2),
(167, '53900.120', '53900.120', 0, '53900.120', 1),
(168, '2611.370', '2611.370', 0, '5222.740', 1),
(169, '4253.490', '4253.490', 0, '8506.980', 1),
(170, '2467.920', '2467.920', 0, '2467.920', 1),
(171, '7141.030', '7141.030', 0, '7141.030', 1),
(172, '933.130', '933.130', 0, '9331.300', 1),
(173, '6136.890', '6136.890', 0, '6136.890', 1),
(174, '2724.480', '2724.480', 0, '13622.400', 1),
(175, '25627.270', '25627.270', 0, '25627.270', 1),
(176, '27000.000', '27000.000', 0, '27000.000', 1),
(177, '22000.000', '22000.000', 0, '88000.000', 1),
(178, '16000.000', '16000.000', 0, '48000.000', 1),
(179, '200.000', '200.000', 0, '90000.000', 1),
(180, '76300.000', '76300.000', 0, '2136400.000', 1),
(181, '763600.000', '763600.000', 0, '763600.000', 1),
(182, '3623.840', '3623.840', 0, '3623.840', 1),
(183, '1140.150', '1140.150', 0, '1140.150', 1),
(184, '769.000', '769.000', 0, '769.000', 2),
(185, '11505.990', '11505.990', 0, '11505.990', 1),
(186, '3600.000', '3600.000', 0, '7200.000', 1),
(187, '31711.960', '31711.960', 0, '31711.960', 1),
(188, '1600.000', '1600.000', 0, '12800.000', 1),
(189, '100.000', '100.000', 0, '100.000', 1),
(190, '500.000', '500.000', 0, '500.000', 2),
(191, '200.000', '200.000', 0, '200.000', 2),
(192, '600.000', '600.000', 0, '600.000', 1),
(193, '700.000', '700.000', 0, '700.000', 2),
(194, '300.000', '300.000', 0, '300.000', 2),
(195, '600.000', '600.000', 0, '600.000', 1),
(196, '850.000', '850.000', 0, '850.000', 2),
(197, '200.000', '200.000', 0, '200.000', 2),
(198, '250.000', '250.000', 0, '250.000', 2),
(199, '1100.000', '1100.000', 0, '1100.000', 2),
(200, '550.000', '550.000', 0, '550.000', 2),
(201, '5000.000', '5000.000', 0, '5000.000', 1),
(202, '1500.000', '1500.000', 0, '1500.000', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proporcionalidad`
--

CREATE TABLE `proporcionalidad` (
  `pd_id` bigint(20) NOT NULL,
  `pd_id_proyecto` bigint(20) NOT NULL,
  `pd_tasa_interes` float NOT NULL,
  `pd_año_financiamiento` int(2) NOT NULL,
  `pd_pagos_anuales` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `proveedor_id` bigint(20) NOT NULL,
  `proveedor_nombre` varchar(100) DEFAULT NULL,
  `proveedor_telefono` bigint(15) DEFAULT NULL,
  `proveedor_email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `proveedor`
--

INSERT INTO `proveedor` (`proveedor_id`, `proveedor_nombre`, `proveedor_telefono`, `proveedor_email`) VALUES
(26, 'INCOMEX ', 0, ''),
(27, 'SYSCOM', 0, ''),
(28, 'TECH DATA', 0, ''),
(29, 'SYNNEX', 0, ''),
(30, 'FS', 0, ''),
(31, 'COMPUSOLUCIONES', 0, ''),
(32, 'XWEB', 0, ''),
(33, 'Cruatech', 0, ''),
(34, 'PTN', 0, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor_marca`
--

CREATE TABLE `proveedor_marca` (
  `pm_id` bigint(20) NOT NULL,
  `pm_id_proveedor` bigint(20) DEFAULT NULL,
  `pm_id_marca` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `proveedor_marca`
--

INSERT INTO `proveedor_marca` (`pm_id`, `pm_id_proveedor`, `pm_id_marca`) VALUES
(8, 34, 25),
(9, 26, 26),
(10, 27, 27),
(11, 27, 28),
(12, 27, 29),
(13, 27, 30),
(14, 27, 31),
(15, 28, 32),
(16, 29, 33),
(17, 30, 34),
(18, 28, 35),
(19, 30, 36),
(20, 31, 37),
(21, 31, 38),
(22, 33, 39),
(23, 28, 40),
(24, 31, 41),
(25, 32, 42),
(26, 27, 43),
(27, 27, 29);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `proyecto_id` bigint(20) NOT NULL,
  `proyecto_clave` varchar(255) DEFAULT NULL,
  `proyecto_descripcion` text DEFAULT NULL,
  `proyecto_id_cliente` int(11) DEFAULT NULL,
  `proyecto_fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `proyecto_fecha_modificacion` datetime NOT NULL DEFAULT current_timestamp(),
  `proyecto_estatus` varchar(50) DEFAULT NULL,
  `proyecto_plazo_meses` int(3) DEFAULT NULL,
  `proyecto_valor_dolar` decimal(20,3) NOT NULL DEFAULT 1.000
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `proyecto`
--

INSERT INTO `proyecto` (`proyecto_id`, `proyecto_clave`, `proyecto_descripcion`, `proyecto_id_cliente`, `proyecto_fecha_creacion`, `proyecto_fecha_modificacion`, `proyecto_estatus`, `proyecto_plazo_meses`, `proyecto_valor_dolar`) VALUES
(70, 'pp', 'prueba', 13, '2022-03-29 20:08:04', '2022-03-29 14:08:04', NULL, NULL, '1.000'),
(71, 'FO-ING-01', '1658-BOM1', 13, '2022-03-30 09:54:18', '2022-03-29 14:27:12', 'En revision', NULL, '1.000'),
(75, 'rtr', 'rrr', 13, '2022-04-02 03:08:11', '2022-04-01 21:08:11', NULL, 11, '1.000'),
(76, 'eee', 'eee', 13, '2022-04-02 03:13:33', '2022-04-01 21:13:33', NULL, 1, '1.000'),
(78, 'qw', 'qwqw', 13, '2022-04-02 03:17:52', '2022-04-01 21:17:52', NULL, 10, '1.000'),
(80, 'qqq', 'qq', 13, '2022-04-02 03:25:12', '2022-04-01 21:25:12', NULL, 1, '1.000'),
(81, 'FO-ING-01-BOM- PRUEBA', 'PRUEBA 1 ', 13, '2022-04-02 09:22:29', '2022-04-02 03:11:46', 'En revision', 12, '1.000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos_cat_d`
--

CREATE TABLE `proyectos_cat_d` (
  `pc_id` bigint(20) NOT NULL,
  `pc_id_proyecto` bigint(20) DEFAULT NULL,
  `pc_id_cat_d` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `proyectos_cat_d`
--

INSERT INTO `proyectos_cat_d` (`pc_id`, `pc_id_proyecto`, `pc_id_cat_d`) VALUES
(107, 81, 115),
(108, 81, 116),
(109, 81, 117),
(110, 81, 118);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `psp`
--

CREATE TABLE `psp` (
  `psp_id` bigint(20) NOT NULL,
  `psp_id_partida` bigint(20) DEFAULT NULL,
  `psp_id_sp` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `psp`
--

INSERT INTO `psp` (`psp_id`, `psp_id_partida`, `psp_id_sp`) VALUES
(39, 25, 1048),
(40, 25, 1049),
(41, 25, 1050),
(42, 25, 1051),
(43, 25, 1052),
(44, 25, 1053),
(45, 25, 1054),
(46, 25, 1055),
(47, 25, 1056),
(48, 25, 1057),
(49, 25, 1058),
(50, 25, 1059),
(51, 25, 1060),
(52, 25, 1061),
(53, 25, 1062),
(54, 25, 1063),
(55, 25, 1064),
(56, 25, 1065),
(57, 25, 1066),
(58, 25, 1067),
(59, 25, 1068),
(60, 25, 1069),
(61, 25, 1070),
(62, 25, 1071),
(63, 25, 1072),
(64, 25, 1073),
(65, 25, 1074),
(66, 25, 1075),
(67, 25, 1076),
(68, 25, 1077),
(69, 25, 1078),
(73, 27, 1082),
(74, 27, 1083),
(75, 25, 1084),
(76, 27, 1085),
(77, 27, 1086),
(78, 27, 1087),
(79, 27, 1088),
(80, 27, 1089),
(81, 27, 1090),
(82, 27, 1091),
(83, 27, 1092),
(84, 27, 1093),
(85, 27, 1094),
(86, 27, 1095),
(87, 27, 1096),
(88, 27, 1097),
(89, 27, 1098),
(90, 27, 1099),
(91, 27, 1100),
(92, 27, 1101),
(93, 27, 1102),
(94, 27, 1103),
(95, 27, 1104),
(96, 27, 1105),
(97, 27, 1106),
(98, 27, 1107),
(99, 27, 1108),
(100, 27, 1109),
(101, 27, 1110),
(102, 27, 1111),
(103, 27, 1112),
(104, 27, 1113),
(105, 29, 1114),
(106, 29, 1115),
(107, 29, 1116),
(108, 29, 1117),
(109, 29, 1118),
(110, 29, 1119),
(111, 29, 1120),
(112, 29, 1121),
(113, 29, 1122),
(114, 29, 1123),
(115, 29, 1124),
(116, 29, 1125),
(117, 29, 1126),
(118, 29, 1127),
(119, 29, 1128),
(120, 29, 1129),
(121, 29, 1130),
(122, 29, 1131),
(123, 30, 1132),
(124, 30, 1133),
(125, 30, 1134),
(126, 30, 1135),
(127, 30, 1136),
(128, 30, 1137),
(129, 30, 1138),
(130, 30, 1139),
(131, 30, 1140),
(132, 30, 1141),
(133, 30, 1142),
(134, 30, 1143),
(135, 30, 1144),
(136, 30, 1145),
(137, 30, 1146),
(138, 30, 1147),
(139, 30, 1148),
(140, 30, 1149),
(141, 30, 1150),
(142, 30, 1151),
(143, 30, 1152),
(144, 30, 1153),
(145, 31, 1154),
(146, 31, 1155),
(147, 31, 1156),
(148, 31, 1157),
(149, 31, 1158),
(150, 31, 1159),
(151, 31, 1160),
(152, 31, 1161),
(153, 31, 1162),
(154, 31, 1163),
(155, 31, 1164),
(156, 31, 1165),
(157, 31, 1166),
(158, 41, 1167),
(159, 46, 1168),
(160, 46, 1169),
(161, 46, 1170),
(162, 47, 1171),
(163, 47, 1172),
(164, 47, 1173),
(165, 48, 1174),
(166, 48, 1175),
(167, 49, 1176);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio_producto`
--

CREATE TABLE `servicio_producto` (
  `sp_id` bigint(20) NOT NULL,
  `sp_no_parte` varchar(255) DEFAULT NULL,
  `sp_descripcion` varchar(255) DEFAULT NULL,
  `sp_meses` int(3) DEFAULT NULL,
  `sp_semanas` int(3) DEFAULT NULL,
  `sp_cantidad` int(3) DEFAULT NULL,
  `sp_id_precio` bigint(20) DEFAULT NULL,
  `sp_id_categoria` int(10) DEFAULT NULL,
  `sp_comentarios` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `servicio_producto`
--

INSERT INTO `servicio_producto` (`sp_id`, `sp_no_parte`, `sp_descripcion`, `sp_meses`, `sp_semanas`, `sp_cantidad`, `sp_id_precio`, `sp_id_categoria`, `sp_comentarios`) VALUES
(1048, 'Q6075-E', 'Q6075-E Axis PTZ Camera', 0, 0, 53, 70, 3, ''),
(1049, 'Q6075-SE', 'Q6075-SE Axis PTZ Camera', 0, 0, 2, 71, 3, ''),
(1050, 'Q6315-LE', 'Q6315-LE Axis PTZ Camera', 0, 0, 10, 72, 3, ''),
(1051, 'Q1615-LE Mk III', 'Q1615-LE Mk III Axis Fixed Camera', 0, 0, 58, 73, 3, ''),
(1052, 'P1378', 'P1378 Axis Fixed Camera', 0, 0, 7, 74, 3, ''),
(1053, 'P3248-LV', 'P3248-LV Axis Fixed Dome Camera', 0, 0, 22, 75, 3, ''),
(1054, 'M3057-PLVE Mk II', 'M3057-PLVE Mk II Axis Panoramic Camera', 0, 0, 5, 76, 3, ''),
(1055, 'M3068-P', 'M3068-P Axis Panoramic Camera', 0, 0, 2, 77, 3, ''),
(1056, 'Q1942-E', 'Q1942-E Axis Thermal Camera', 0, 0, 20, 78, 3, ''),
(1057, 'Q8752-E', 'Q8752-E Axis Thermal PTZ Camera', 0, 0, 7, 79, 3, ''),
(1058, 'T91L61', 'Wall & Pole Mount for Q6075-E', 0, 0, 53, 80, 3, ''),
(1059, 'T91K61', 'Wall & Pole Mount for Q6075-E', 0, 0, 2, 81, 3, ''),
(1060, 'T91F67', 'Pole Mount for Q6075-SE', 0, 0, 2, 82, 3, ''),
(1061, 'T8008 PS24', 'Power Supply for Q6075-SE', 0, 0, 2, 83, 3, ''),
(1062, 'T91L61', 'Wall & Pole Mount for Q6315-LE', 0, 0, 10, 84, 3, ''),
(1063, 'T91B47', 'Pole Mount for Q1615-LE Mk III', 0, 0, 58, 85, 3, ''),
(1064, 'T91B47', 'Pole Mount for Q1942-E', 0, 0, 20, 86, 3, ''),
(1065, 'T94J01A', 'Wall Mount for Q8752-E', 0, 0, 7, 87, 3, ''),
(1066, 'T94N01G', 'Pole Mount for Q8752-E', 0, 0, 7, 88, 3, ''),
(1067, 'DIN PS24 480 W', 'Power Supply for Q8752-E', 0, 0, 7, 89, 3, ''),
(1068, '30W Outdoor Midspan', '30W Outdoor Midspan', 0, 0, 58, 90, 3, ''),
(1069, 'T8120', '15W Indoor Midspan', 0, 0, 56, 91, 3, ''),
(1070, 'Steel Straps TX30', 'Steel Straps TX30', 0, 0, 150, 92, 3, ''),
(1071, 'AP-60-900', 'N009045D001A - Antena AP (60 grados), 900 MHz, 13 dBi', 0, 0, 4, 93, 3, ''),
(1072, 'PMP-450I-900', 'Punto de Acceso Serie PMP 450i - Solución Punto - Multipunto ', 0, 0, 2, 94, 3, ''),
(1073, 'FORCE180', 'Suscriptor ePMP Force 180 5GHz, 200+ Mbps con antena ', 0, 0, 10, 95, 3, ''),
(1074, 'XGA-POLE-6M', 'Poste seccionado de 6m, especializado para la instalación de CCTV', 0, 0, 80, 96, 3, ''),
(1075, 'WI5POE28', 'Kit solar para CCTV', 0, 0, 80, 97, 3, ''),
(1076, 'NK6PC3Y', 'Cable de parcheo UTP Categoría 6, con plug modular en cada extremo - 1 m', 0, 0, 25, 98, 3, ''),
(1077, 'NK6PC5BUY', 'Cable de parcheo UTP Categoría 6, con plug modular en cada extremo - 1 ft (30.48 cm)', 0, 0, 186, 99, 3, ''),
(1078, '9A6R4-A5', 'Bobina de Cable Blindado F/UTP de 4 Pares, Z-MAX, Cat6A', 0, 0, 65, 100, 3, ''),
(1079, 'NX-3170-G6-34122', 'Nutanix Hardware Platform *    NX-3170-G6, 1 Node (Hybrid) ', 0, 0, 3, 101, 3, ''),
(1080, '11552', 'Módulo transceptor compatible con Cisco SFP-10G-SR, ', 0, 0, 6, 102, 3, ''),
(1081, '74668', 'Módulo Transceptor SFP+ Genérico Compatible 10GBASESR Fibra Óptica - LC Dúplex, 10 Gigabit Ethernet, Multimodo, 300m, 850nm', 0, 0, 4, 103, 3, ''),
(1082, 'NX-3170-G6-34122', 'Nutanix Hardware Platform *    NX-3170-G6, 1 Node (Hybrid) Nutanix Software *    Foundation - Hypervisor Agnostic Installer *    Controller VM *    Prism Management *    Starter License Entitlement', 0, 0, 3, 104, 3, ''),
(1083, '11552', 'Módulo transceptor compatible con Cisco SFP-10G-SR, 10GBASE-SR SFP+ 850nm 300m DOM (estándar)', 0, 0, NULL, 105, 3, ''),
(1084, 'NK6PC1BUY', 'Cable de parcheo UTP Categoría 6, con plug modular en cada extremo - 1 ft (30.48 cm)', 0, 0, 186, 106, 3, ''),
(1085, '74668', 'Módulo Transceptor SFP+ Genérico Compatible 10GBASESR Fibra Óptica - LC Dúplex, 10 Gigabit Ethernet, Multimodo, 300m, 850nm', 0, 0, 6, 107, 3, ''),
(1086, 'Jumpers', 'Jumpers de fibra multimodo 50/125 OM3', 0, 0, 6, 108, 3, ''),
(1087, 'C-CPU-6148', 'Intel Skylake Processor 2.4 GHz 20-core Skylake 6148 CPU', 0, 0, 6, 109, 3, ''),
(1088, 'C-MEM-32R4-26A', '32GB DDR4 2666MHz Memory Module', 0, 0, 48, 110, 3, ''),
(1089, 'C-HDD-2TB-2.5', '2TB 2.5\" HDD', 0, 0, 18, 111, 3, ''),
(1090, 'C-SSD-1920GB-2.5-C', '1.92TB 2.5\" SSD', 0, 0, 6, 112, 3, ''),
(1091, 'C-NIC-10GSFP2-A', '10GbE, 2-port, SFP+ Network Adapter (Intel 82599ES)', 0, 0, 3, 113, 3, ''),
(1092, 'C-CBL-5M-SFP+-SFP+', 'Cable 5m SFP+ to SFP+', 0, 0, 6, 114, 3, ''),
(1093, 'S-PRD-3170-G6-HY-3YR', '3YR Production System Support for NTNX NX-3170-G6 (Hybrid)', 0, 0, 3, 115, 5, ''),
(1094, 'L-PRO-3170-G6', 'LIC, PRO for NX-3170-G6 ; Valid for LOD', 0, 0, 3, 116, 4, ''),
(1095, 'CNS-INST-NX-AHV-A', 'Nutanix Services Installation, Per Node, up to 64, New or ', 0, 0, 3, 117, 6, ''),
(1096, 'C-CNS-INST-NX', 'Services Install, Hardware Platform NX', 0, 0, 3, 118, 6, ''),
(1097, 'C-CNS-INST-AHV', 'Services Install, Primary Hypervisor: AHV', 0, 0, 3, 119, 6, ''),
(1098, 'C-CNS-INST-AMER', 'Services Install, Delivery Geography: Americas', 0, 0, 3, 120, 6, ''),
(1099, 'CNS-INST-ADD NONE', 'Services Install, AddOn: NONE', 0, 0, 1, 121, 6, ''),
(1100, 'CNS-INST-BASE', 'SERVICE: Nutanix Services Installation base charge', 0, 0, 1, 122, 6, ''),
(1101, 'CNS-INST-BASE', 'Windows Server', 0, 0, 260, 123, 4, ''),
(1102, 'CNS-INST-BASE', 'Windows Server', 0, 0, 66, 124, 4, ''),
(1103, 'CNS-INST-BASE', 'OceanStor SNS3664', 0, 0, 2, 125, 3, ''),
(1104, 'CNS-INST-BASE', 'Storage Equipment-OceanStor 5300 V5 (2020 new)', 0, 0, 1, 126, 3, ''),
(1105, 'CNS-INST-BASE', 'Storage Equipment-OceanStor 5300 V5 (2020 new)-Technical Support Service', 0, 0, 1, 127, 5, ''),
(1106, 'CNS-INST-BASE', 'OceanStor SNS3664-Installation Service', 0, 0, 2, 128, 6, ''),
(1107, 'CNS-INST-BASE', 'Storage-Converged storage Planning, Design and ', 0, 0, 1, 129, 6, ''),
(1108, 'SWS-DV', 'OnGuard Video Security Server Software License', 0, 0, 2, 130, 4, ''),
(1109, 'SWS-LAS', 'Lenel Archive Server License', 0, 0, 2, 131, 4, ''),
(1110, 'SW-LNR-CH1', 'Lenel Network Video Recorder Software', 0, 0, 186, 132, 4, ''),
(1111, 'SW-LNR-CH1', 'Lenel Network Video Recorder Software', 0, 0, 60, 133, 4, ''),
(1112, 'SWG-DV', 'OnGuard Digital Video Enabler', 0, 0, 1, 134, 4, ''),
(1113, 'SWC-DV', 'OnGuard Video Client Software License', 0, 0, 9, 135, 4, ''),
(1114, 'NX-3170-G6-34122', 'Nutanix Hardware Platform *    NX-3170-G6, 1 Node (Hybrid) Nutanix Software *    Foundation - Hypervisor Agnostic Installer *    Controller VM *    Prism Management *    Starter License Entitlement', 0, 0, 2, 136, 3, ''),
(1115, '11552', 'Módulo transceptor compatible con Cisco SFP-10G-SR, 10GBASE-SR SFP+ 850nm 300m DOM (estándar)', 0, 0, 4, 137, 3, ''),
(1116, '74668', 'Módulo Transceptor SFP+ Genérico Compatible 10GBASESR Fibra Óptica - LC Dúplex, 10 Gigabit Ethernet, Multimodo, 300m, 850nm', 0, 0, 4, 138, 3, ''),
(1117, 'Jumpers', 'Jumpers de fibra multimodo 50/125 OM3', 0, 0, 4, 139, 3, ''),
(1118, 'C-CPU-6148', 'Intel Skylake Processor 2.4 GHz 20-core Skylake 6148 CPU', 0, 0, 4, 140, 3, ''),
(1119, 'C-MEM-32R4-26A', '32GB DDR4 2666MHz Memory Module', 0, 0, 32, 141, 3, ''),
(1120, 'C-HDD-2TB-2.5', '2TB 2.5\" HDD', 0, 0, 12, 142, 3, ''),
(1121, 'C-SSD-1920GB-2.5-C', '1.92TB 2.5\" SSD', 0, 0, 4, 143, 3, ''),
(1122, 'C-NIC-10GSFP2-A', '10GbE, 2-port, SFP+ Network Adapter (Intel 82599ES)', 0, 0, 2, 144, 6, ''),
(1123, 'C-CBL-5M-SFP+-SFP+', 'Cable 5m SFP+ to SFP+', 0, 0, 4, 145, 3, ''),
(1124, 'S-PRD-3170-G6-HY-3YR', '3YR Production System Support for NTNX NX-3170-G6 (Hybrid)', 0, 0, 2, 146, 5, ''),
(1125, 'L-PRO-3170-G6', 'LIC, PRO for NX-3170-G6 ; Valid for LOD', 0, 0, 2, 147, 4, ''),
(1126, 'CNS-INST-NX-AHV-A', 'Nutanix Services Installation, Per Node, up to 64, New or Existing Environment DELIVERY: On-Site, via Nutanix Services See *Nutanix Implementation Service* Data Sheet for Scope of Services Valid for the following approved hardware platforms: NX, Dell, Len', 0, 0, 2, 148, 6, ''),
(1127, 'C-CNS-INST-NX', 'Services Install, Hardware Platform NX', 0, 0, 2, 149, 6, ''),
(1128, 'C-CNS-INST-AHV', 'Services Install, Primary Hypervisor: AHV', 0, 0, 2, 150, 6, ''),
(1129, 'C-CNS-INST-AMER', 'Services Install, Delivery Geography: Americas', 0, 0, 2, 151, 6, ''),
(1130, 'CNS-INST-ADD NONE', 'Services Install, AddOn: NONE', 0, 0, 1, 152, 6, ''),
(1131, 'CNS-INST-BASE', 'SERVICE: Nutanix Services Installation base charge', 0, 0, 1, 153, 6, ''),
(1132, '94202FM', 'Lenovo Workstation Lenovo ThinkStation P340 30DJS8A500', 0, 0, 9, 154, 6, ''),
(1133, '24UD58-B', 'Monitor para WorkStation', 0, 0, 9, 155, 3, ''),
(1134, '94200L3', 'Lenovo Mouse Óptico', 0, 0, 9, 156, 3, ''),
(1135, '91400JX', 'Altavoces para WorkStation', 0, 0, 9, 157, 3, ''),
(1136, 'C18005E', 'Microsoft Office Pro Anual', 12, 0, 27, 158, 4, ''),
(1137, 'NPDF-PRO', 'Nitro PDF Pro Anual', 12, 0, 27, 159, 4, ''),
(1138, '30101CY', 'MCAFEE INTERNET SECURITY 3 DEVICE Anual', 12, 0, 9, 160, 4, ''),
(1139, 'S5731-H48P4XC', 'S5731-H48P4XC (48*10/100/1000BASE-T ports, 4*10GE SFP+ ports, 1*expansion slot, PoE+, without power module)', 12, 0, 5, 161, 3, ''),
(1140, 'N1-S57H-M-Lic', 'S57XX-H Series Basic SW,Per Device', 12, 0, 5, 162, 4, ''),
(1141, 'N1-S57H-M-SnS', 'S57XX-H Series Basic SW,SnS,Per Device( Annual fee validity period:3 years  from \" 90 days after PO signed \" )', 12, 0, 5, 163, 4, ''),
(1142, 'PAC1000S56-DB', '1000W AC Power Module', 12, 0, 10, 164, 3, ''),
(1143, 'OMXD30000', 'Optical Transceiver,SFP+,10G,Multi-mode ', 12, 0, 5, 165, 3, ''),
(1144, '02352SVD-001_88134UGQ-4SY_36', 'S5731-H48P4XC (48*10/100/1000BASE-T ports, 4*10GE SFP+ ports, 1*expansion slot, PoE+, without power module)-Co-Care Standard S5731-H48P4XC-36Month(s)', 12, 0, 5, 166, 5, ''),
(1145, 'DNE6212B', 'Gabinete Net-Verse para Centros de Datos, 42UR', 12, 0, 1, 167, 3, ''),
(1146, 'WMP1E', 'Organizador de Cables Horizontal PatchLink', 12, 0, 2, 168, 3, ''),
(1147, 'P12B01M', 'PDU Básico para Distribución de Energía, Enchufe de Entrada ', 12, 0, 2, 169, 3, ''),
(1148, 'RGRB19U', 'Barra de Conexión a Tierra para Rack', 12, 0, 1, 170, 3, ''),
(1149, 'PZCHSM2', 'Charola Ventilada Para Administración de Cable en Racks o Gabinetes', 12, 0, 1, 171, 3, ''),
(1150, 'RGEJ1024PFY', 'Jumper Para Aterrizar Equipos en Racks o Gabinetes', 12, 0, 10, 172, 3, ''),
(1151, 'CNWS1224-C', 'Kit de 100 Tornillos y 100 Tuercas Enjauladas #12-24', 12, 0, 1, 173, 3, ''),
(1152, 'LP-PP-608', 'Panel de parcheo de impacto (110) UTP de 48 puertos', 12, 0, 5, 174, 3, ''),
(1153, 'N/A', 'Insumos adicionales', 12, 0, 1, 175, 3, ''),
(1154, 'N/A', 'Coordinador Técnico Anual', 28, 0, 1, 176, 3, ''),
(1155, 'N/A', 'Ingeniero de Servicio Anual', 28, 0, 4, 177, 3, ''),
(1156, 'N/A', 'Técnico de Servicio Anual', 28, 0, 3, 178, 3, ''),
(1157, 'N/A', 'Mantenimiento preventivo por equipo', 28, 0, 450, 179, 3, ''),
(1158, 'N/A', 'Arrendamiento de Equipo de Elevación', 28, 0, 28, 180, 3, ''),
(1159, 'N/A', 'Camioneta 4x4 doble cabina', 28, 0, 1, 181, 3, ''),
(1160, 'N/A', 'Flejadora para acero 1/2\"', 28, 0, 1, 182, 3, ''),
(1161, 'N/A', 'Kit De Herramientas Fibra Óptica Con Medidor D Potencia 10km', 28, 0, 1, 183, 3, ''),
(1162, 'T8415', 'AXIS T8415 WIRELESS INST TOOL KIT', 28, 0, 1, 184, 3, ''),
(1163, 'T8415', 'Multímetro Industrial Fluke 87-5', 28, 0, 1, 185, 3, ''),
(1164, 'T8415', 'SAMSUNG P6.5 4RAM 64ROM F8MP T48 5 2 2 MP SAMSUNG', 28, 0, 2, 186, 3, ''),
(1165, 'T8415', 'Laptop HP Core i7 11a Gen/RAM 16 GB/1 TB SSD', 28, 0, 1, 187, 3, ''),
(1166, 'T8415', 'Insumos para mantenimiento preventivo', 28, 0, 8, 188, 3, ''),
(1167, 'xx', 'x', 0, 0, 1, 189, 4, ''),
(1168, '01', 'Chasis', 0, 0, 1, 190, 3, ''),
(1169, '02', 'Licencia', 0, 0, 1, 191, 4, ''),
(1170, '03', 'Fuentes', 0, 0, 1, 192, 3, ''),
(1171, '01', 'Chasis', 0, 0, 1, 193, 3, ''),
(1172, '02', 'Licencia', 0, 0, 1, 194, 4, ''),
(1173, '03', 'Fuentes', 0, 0, 1, 195, 3, ''),
(1174, '01', 'Servidor', 0, 0, 1, 196, 3, ''),
(1175, '02', 'Soporte de Fabricante', 0, 0, 1, 197, 5, ''),
(1176, '01', 'Soporte de Fabricante', 0, 0, 1, 198, 5, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sp_proveedor_marca`
--

CREATE TABLE `sp_proveedor_marca` (
  `sppm_id` int(10) NOT NULL,
  `sppm_id_sp` bigint(20) DEFAULT NULL,
  `sppm_id_proveedor` bigint(20) DEFAULT NULL,
  `sppm_id_marca` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` bigint(20) NOT NULL,
  `rol` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `estado_login` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `rol`, `email`, `password`, `estado_login`) VALUES
(1, 'administrador', 'carlos@delfos369.com', '$2a$12$01AiKJWTCOyfNVywcZfTFuGXkF3NgRcDrjkyxp003oN7jbLoiAqD2', 1),
(11, 'preventa', 'oscar@delfos369.com', '$2a$12$01AiKJWTCOyfNVywcZfTFuGXkF3NgRcDrjkyxp003oN7jbLoiAqD2', 1),
(12, 'venta', 'brenda@delfos369.com', '$2a$10$1cjZbWujzFUOmaux3GFXA.3iEaECUrV9bnC5liq9YWSfG0Gqxdwve', 1),
(13, 'preventa', 'malaika@delfos369.com', '$2a$10$hGYpGJvTmwMa0chv/ucZguUjs2Lx0V/wWTgHjzxSFATS8oS13oSyS', 0),
(14, 'preventa', 'preventa@palotinto.com', '$2a$10$iE8Yd8ClJ3aljrLdiAG1POCWR6yxJMYDDlOJhczqIMeV8.GSTT246', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_proyectos`
--

CREATE TABLE `usuarios_proyectos` (
  `up_id` bigint(20) NOT NULL,
  `up_id_usuario` bigint(20) NOT NULL,
  `up_id_proyecto` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios_proyectos`
--

INSERT INTO `usuarios_proyectos` (`up_id`, `up_id_usuario`, `up_id_proyecto`) VALUES
(59, 1, 70),
(60, 11, 71),
(61, 1, 75),
(62, 1, 76),
(63, 1, 78),
(64, 1, 80),
(65, 14, 81);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `am`
--
ALTER TABLE `am`
  ADD PRIMARY KEY (`am_id`),
  ADD KEY `fk_am_id_partida` (`am_id_partida`);

--
-- Indices de la tabla `am_cats`
--
ALTER TABLE `am_cats`
  ADD PRIMARY KEY (`amc_id`),
  ADD KEY `fk_amc_id_proyecto` (`amc_id_proyecto`),
  ADD KEY `fk_amc_id_cats` (`amc_id_cats`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`categoria_id`);

--
-- Indices de la tabla `categorias_ci`
--
ALTER TABLE `categorias_ci`
  ADD PRIMARY KEY (`cci_id`);

--
-- Indices de la tabla `categorias_c_a_sptn_ma`
--
ALTER TABLE `categorias_c_a_sptn_ma`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indices de la tabla `categorias_datos`
--
ALTER TABLE `categorias_datos`
  ADD PRIMARY KEY (`cd_id`),
  ADD KEY `fk_cd_id_categorias` (`cd_id_cats`),
  ADD KEY `fk_cd_id_precios` (`cd_id_precio`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`cliente_id`);

--
-- Indices de la tabla `colaboradores`
--
ALTER TABLE `colaboradores`
  ADD PRIMARY KEY (`colab_id`),
  ADD KEY `fk_colab_id_usuario` (`colab_id_usuario`),
  ADD KEY `fk_colab_id_proyecto` (`colab_id_proyecto`);

--
-- Indices de la tabla `costos_indirectos`
--
ALTER TABLE `costos_indirectos`
  ADD PRIMARY KEY (`ci_id`),
  ADD KEY `fk_ci_id_cii` (`ci_id_cci`),
  ADD KEY `fk_ci_id_proyecto` (`ci_id_proyecto`);

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
  ADD PRIMARY KEY (`partida_id`);

--
-- Indices de la tabla `pp`
--
ALTER TABLE `pp`
  ADD PRIMARY KEY (`pp_id`),
  ADD KEY `fk_pp_id_partida` (`pp_id_partida`),
  ADD KEY `fk_pp_id_proyecto` (`pp_id_proyecto`);

--
-- Indices de la tabla `precio`
--
ALTER TABLE `precio`
  ADD PRIMARY KEY (`precio_id`),
  ADD KEY `fk_precio_id_moneda` (`precio_id_moneda`);

--
-- Indices de la tabla `proporcionalidad`
--
ALTER TABLE `proporcionalidad`
  ADD PRIMARY KEY (`pd_id`),
  ADD KEY `fk_pd_id_proyecto` (`pd_id_proyecto`);

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`proveedor_id`);

--
-- Indices de la tabla `proveedor_marca`
--
ALTER TABLE `proveedor_marca`
  ADD PRIMARY KEY (`pm_id`),
  ADD KEY `fk_pm_id_proveedor` (`pm_id_proveedor`),
  ADD KEY `fk_pm_id_marca` (`pm_id_marca`);

--
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD PRIMARY KEY (`proyecto_id`),
  ADD KEY `fk_proyecto_id_cliente` (`proyecto_id_cliente`);

--
-- Indices de la tabla `proyectos_cat_d`
--
ALTER TABLE `proyectos_cat_d`
  ADD PRIMARY KEY (`pc_id`),
  ADD KEY `fk_pc_id_proyecto` (`pc_id_proyecto`),
  ADD KEY `fk_pc_id_cat_d` (`pc_id_cat_d`);

--
-- Indices de la tabla `psp`
--
ALTER TABLE `psp`
  ADD PRIMARY KEY (`psp_id`),
  ADD KEY `fk_psp_id_sp` (`psp_id_sp`),
  ADD KEY `fk_psp_id_partida` (`psp_id_partida`);

--
-- Indices de la tabla `servicio_producto`
--
ALTER TABLE `servicio_producto`
  ADD PRIMARY KEY (`sp_id`),
  ADD KEY `fk_sp_id_precio` (`sp_id_precio`),
  ADD KEY `fk_sp_id_categoria` (`sp_id_categoria`);

--
-- Indices de la tabla `sp_proveedor_marca`
--
ALTER TABLE `sp_proveedor_marca`
  ADD PRIMARY KEY (`sppm_id`),
  ADD KEY `fk_sppm_id_sp` (`sppm_id_sp`),
  ADD KEY `fk_sppm_id_proveedor` (`sppm_id_proveedor`),
  ADD KEY `fk_sppm_id_marca` (`sppm_id_marca`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `usuarios_proyectos`
--
ALTER TABLE `usuarios_proyectos`
  ADD PRIMARY KEY (`up_id`),
  ADD KEY `fk_up_id_usuario` (`up_id_usuario`),
  ADD KEY `fk_up_id_proyecto` (`up_id_proyecto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `am`
--
ALTER TABLE `am`
  MODIFY `am_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `am_cats`
--
ALTER TABLE `am_cats`
  MODIFY `amc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `categoria_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `categorias_ci`
--
ALTER TABLE `categorias_ci`
  MODIFY `cci_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `categorias_c_a_sptn_ma`
--
ALTER TABLE `categorias_c_a_sptn_ma`
  MODIFY `cat_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `categorias_datos`
--
ALTER TABLE `categorias_datos`
  MODIFY `cd_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `cliente_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `colaboradores`
--
ALTER TABLE `colaboradores`
  MODIFY `colab_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `costos_indirectos`
--
ALTER TABLE `costos_indirectos`
  MODIFY `ci_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `marca_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `moneda`
--
ALTER TABLE `moneda`
  MODIFY `moneda_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `partida`
--
ALTER TABLE `partida`
  MODIFY `partida_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de la tabla `pp`
--
ALTER TABLE `pp`
  MODIFY `pp_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `precio`
--
ALTER TABLE `precio`
  MODIFY `precio_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=203;

--
-- AUTO_INCREMENT de la tabla `proporcionalidad`
--
ALTER TABLE `proporcionalidad`
  MODIFY `pd_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  MODIFY `proveedor_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `proveedor_marca`
--
ALTER TABLE `proveedor_marca`
  MODIFY `pm_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `proyecto_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT de la tabla `proyectos_cat_d`
--
ALTER TABLE `proyectos_cat_d`
  MODIFY `pc_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- AUTO_INCREMENT de la tabla `psp`
--
ALTER TABLE `psp`
  MODIFY `psp_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=168;

--
-- AUTO_INCREMENT de la tabla `servicio_producto`
--
ALTER TABLE `servicio_producto`
  MODIFY `sp_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1177;

--
-- AUTO_INCREMENT de la tabla `sp_proveedor_marca`
--
ALTER TABLE `sp_proveedor_marca`
  MODIFY `sppm_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=162;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `usuarios_proyectos`
--
ALTER TABLE `usuarios_proyectos`
  MODIFY `up_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `am`
--
ALTER TABLE `am`
  ADD CONSTRAINT `fk_am_id_partida` FOREIGN KEY (`am_id_partida`) REFERENCES `partida` (`partida_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `am_cats`
--
ALTER TABLE `am_cats`
  ADD CONSTRAINT `fk_amc_id_cats` FOREIGN KEY (`amc_id_cats`) REFERENCES `categorias_c_a_sptn_ma` (`cat_id`),
  ADD CONSTRAINT `fk_amc_id_proyecto` FOREIGN KEY (`amc_id_proyecto`) REFERENCES `proyecto` (`proyecto_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `categorias_datos`
--
ALTER TABLE `categorias_datos`
  ADD CONSTRAINT `fk_cd_id_categorias` FOREIGN KEY (`cd_id_cats`) REFERENCES `categorias_c_a_sptn_ma` (`cat_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_cd_id_precios` FOREIGN KEY (`cd_id_precio`) REFERENCES `precio` (`precio_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `colaboradores`
--
ALTER TABLE `colaboradores`
  ADD CONSTRAINT `fk_colab_id_proyecto` FOREIGN KEY (`colab_id_proyecto`) REFERENCES `proyecto` (`proyecto_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_colab_id_usuario` FOREIGN KEY (`colab_id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `costos_indirectos`
--
ALTER TABLE `costos_indirectos`
  ADD CONSTRAINT `fk_ci_id_cii` FOREIGN KEY (`ci_id_cci`) REFERENCES `categorias_ci` (`cci_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_ci_id_proyecto` FOREIGN KEY (`ci_id_proyecto`) REFERENCES `proyecto` (`proyecto_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pp`
--
ALTER TABLE `pp`
  ADD CONSTRAINT `fk_pp_id_partida` FOREIGN KEY (`pp_id_partida`) REFERENCES `partida` (`partida_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_pp_id_proyecto` FOREIGN KEY (`pp_id_proyecto`) REFERENCES `proyecto` (`proyecto_id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `precio`
--
ALTER TABLE `precio`
  ADD CONSTRAINT `fk_precio_id_moneda` FOREIGN KEY (`precio_id_moneda`) REFERENCES `moneda` (`moneda_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `proporcionalidad`
--
ALTER TABLE `proporcionalidad`
  ADD CONSTRAINT `fk_pd_id_proyecto` FOREIGN KEY (`pd_id_proyecto`) REFERENCES `proyecto` (`proyecto_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `proveedor_marca`
--
ALTER TABLE `proveedor_marca`
  ADD CONSTRAINT `fk_pm_id_marca` FOREIGN KEY (`pm_id_marca`) REFERENCES `marca` (`marca_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_pm_id_proveedor` FOREIGN KEY (`pm_id_proveedor`) REFERENCES `proveedor` (`proveedor_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD CONSTRAINT `fk_proyecto_id_cliente` FOREIGN KEY (`proyecto_id_cliente`) REFERENCES `clientes` (`cliente_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `proyectos_cat_d`
--
ALTER TABLE `proyectos_cat_d`
  ADD CONSTRAINT `fk_pc_id_cat_d` FOREIGN KEY (`pc_id_cat_d`) REFERENCES `categorias_datos` (`cd_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_pc_id_proyecto` FOREIGN KEY (`pc_id_proyecto`) REFERENCES `proyecto` (`proyecto_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `psp`
--
ALTER TABLE `psp`
  ADD CONSTRAINT `fk_psp_id_partida` FOREIGN KEY (`psp_id_partida`) REFERENCES `partida` (`partida_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_psp_id_sp` FOREIGN KEY (`psp_id_sp`) REFERENCES `servicio_producto` (`sp_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `servicio_producto`
--
ALTER TABLE `servicio_producto`
  ADD CONSTRAINT `fk_sp_id_categoria` FOREIGN KEY (`sp_id_categoria`) REFERENCES `categoria` (`categoria_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_sp_id_precio` FOREIGN KEY (`sp_id_precio`) REFERENCES `precio` (`precio_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `sp_proveedor_marca`
--
ALTER TABLE `sp_proveedor_marca`
  ADD CONSTRAINT `fk_sppm_id_marca` FOREIGN KEY (`sppm_id_marca`) REFERENCES `marca` (`marca_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_sppm_id_proveedor` FOREIGN KEY (`sppm_id_proveedor`) REFERENCES `proveedor` (`proveedor_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_sppm_id_sp` FOREIGN KEY (`sppm_id_sp`) REFERENCES `servicio_producto` (`sp_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios_proyectos`
--
ALTER TABLE `usuarios_proyectos`
  ADD CONSTRAINT `fk_up_id_proyecto` FOREIGN KEY (`up_id_proyecto`) REFERENCES `proyecto` (`proyecto_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_up_id_usuario` FOREIGN KEY (`up_id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

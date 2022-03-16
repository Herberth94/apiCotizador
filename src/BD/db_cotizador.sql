-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-03-2022 a las 00:49:45
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
  `am_valor_dolar` decimal(20,3) DEFAULT NULL,
  `am_desc_cliente` float DEFAULT NULL,
  `am_margen_ganancia` float DEFAULT NULL,
  `am_desc_fabrica` float DEFAULT NULL,
  `am_id_proyecto` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `am`
--

INSERT INTO `am` (`am_id`, `am_valor_dolar`, `am_desc_cliente`, `am_margen_ganancia`, `am_desc_fabrica`, `am_id_proyecto`) VALUES
(2, '20.000', NULL, NULL, NULL, NULL),
(3, '21.220', NULL, NULL, NULL, NULL);

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
-- Estructura de tabla para la tabla `cat_totales`
--

CREATE TABLE `cat_totales` (
  `ct_id` bigint(20) NOT NULL,
  `ct_totales_mxn` decimal(20,3) DEFAULT NULL,
  `ct_totales_usd` decimal(20,3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cat_totales`
--

INSERT INTO `cat_totales` (`ct_id`, `ct_totales_mxn`, `ct_totales_usd`) VALUES
(4, '100.200', '1.000'),
(5, '200.000', '2.000'),
(6, '100.000', '200.000'),
(7, '0.000', '0.000'),
(8, '0.000', '0.000'),
(9, '0.000', '0.000'),
(10, '50.000', '50.000'),
(11, '0.000', '0.000'),
(12, '0.000', '0.000'),
(13, '0.000', '0.000'),
(14, '1000.200', NULL),
(15, '1000.200', '1000.000'),
(16, '1000.200', '0.000'),
(17, '1000.200', '0.000'),
(18, '1000.200', '0.000'),
(19, '2000.000', '500.000'),
(20, '0.000', '0.000'),
(21, '0.000', '0.000'),
(22, '0.000', '0.000'),
(23, '6000.000', '3000.000'),
(24, '0.000', '0.000'),
(25, '0.000', '0.000'),
(26, '0.000', '0.000');

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
(1, 'carlos', '', NULL, 'Losmas estrella'),
(2, 'IPN', 'SS', NULL, NULL),
(3, 'ESIME', '', NULL, NULL),
(4, 'PT', 'Compra', 5573235165, 'Av'),
(6, 'Cesar', '', 0, ''),
(7, 'Camila', '', 0, ''),
(8, 'Cristian', '', 0, ''),
(9, 'CCP', '', 0, '');

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
  `ci_id` int(10) NOT NULL,
  `ci_descripcion` text DEFAULT NULL,
  `ci_costo` decimal(20,3) DEFAULT NULL,
  `ci_id_am` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `marca_id` int(10) NOT NULL,
  `marca_nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`marca_id`, `marca_nombre`) VALUES
(4, 'PTN'),
(5, 'AZURE'),
(6, 'Kingston'),
(7, 'PT'),
(8, 'King'),
(9, ''),
(10, ''),
(11, ''),
(12, ''),
(13, ''),
(14, '');

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
(1, 'partida 1', 'kdhoihwehd'),
(2, 'jbkjbjkbkj', 'jdbkjbfdjkibfdk'),
(3, 'Partida 1', ''),
(4, 'Partida 2', ''),
(5, 'pp4', ''),
(6, 'pp5', ''),
(7, 'p7', ''),
(8, 'p8', ''),
(9, 'p9', '');

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
(3, 48, 3),
(4, 48, 4),
(5, 49, 5),
(6, 49, 6),
(7, 58, 7),
(8, 58, 8),
(9, 59, 9);

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
(23, '400.000', NULL, NULL, NULL, NULL),
(25, '100.000', '80.000', 20, '0.000', NULL),
(26, '0.000', '20.000', 0, '0.000', NULL),
(27, '0.000', '0.000', 0, '0.000', NULL),
(28, '0.000', '50.000', 99.9, '100.000', NULL),
(29, '100.000', '80.000', 20, '160.000', NULL),
(30, '0.000', '100.000', 0, '200.000', NULL),
(31, '0.000', '500.000', 0, '1500.000', 1),
(32, '500.000', '400.000', 20, '1200.000', 1),
(33, '0.000', '100.000', 0, '300.000', 2),
(34, '0.000', '50.000', 0, '150.000', 2),
(35, '0.000', '100.000', 0, '400.000', 2),
(36, '0.000', '200.000', 0, '600.000', 1),
(37, '0.000', '0.000', 0, '0.000', 1),
(38, '0.000', '0.000', 0, '0.000', 1),
(39, '0.000', '100.000', 0, '200.000', 1),
(40, '0.000', '200.000', 0, '400.000', 2),
(41, '0.000', '2.000', 0, '20.000', 1),
(42, '0.000', '0.000', 0, '0.000', 1),
(43, '0.000', '0.000', 0, '0.000', 1),
(44, '0.000', '0.000', 0, '0.000', 1),
(45, '0.000', '0.000', 0, '0.000', 1),
(46, '0.000', '0.000', 0, '0.000', 1),
(47, '0.000', '0.000', 0, '0.000', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `proveedor_id` int(10) NOT NULL,
  `proveedor_nombre` varchar(100) DEFAULT NULL,
  `proveedor_telefono` bigint(15) DEFAULT NULL,
  `proveedor_compania` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `proveedor`
--

INSERT INTO `proveedor` (`proveedor_id`, `proveedor_nombre`, `proveedor_telefono`, `proveedor_compania`) VALUES
(4, 'PTN', NULL, NULL),
(5, 'AZURE', NULL, NULL),
(6, 'PTN', NULL, NULL),
(7, 'PT', NULL, NULL),
(8, 'pt', NULL, NULL),
(9, '', NULL, NULL),
(10, '', NULL, NULL),
(11, '', NULL, NULL),
(12, '', NULL, NULL),
(13, '', NULL, NULL),
(14, '', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor_marca`
--

CREATE TABLE `proveedor_marca` (
  `pm_id` int(10) NOT NULL,
  `pm_id_proveedor` int(10) DEFAULT NULL,
  `pm_id_marca` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `proveedor_marca`
--

INSERT INTO `proveedor_marca` (`pm_id`, `pm_id_proveedor`, `pm_id_marca`) VALUES
(15, 6, 6),
(16, 7, 7),
(17, 8, 8),
(18, 9, 9),
(19, 10, 10),
(20, 11, 11),
(21, 12, 12),
(22, 13, 13),
(23, 14, 14);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `proyecto_id` bigint(20) NOT NULL,
  `proyecto_clave` varchar(255) DEFAULT NULL,
  `proyecto_descripcion` text DEFAULT NULL,
  `proyecto_id_cliente` int(11) DEFAULT NULL,
  `proyecto_id_cat_c_a_sptn_ma` bigint(20) DEFAULT NULL,
  `proyecto_fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `proyecto_fecha_modificacion` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `proyecto`
--

INSERT INTO `proyecto` (`proyecto_id`, `proyecto_clave`, `proyecto_descripcion`, `proyecto_id_cliente`, `proyecto_id_cat_c_a_sptn_ma`, `proyecto_fecha_creacion`, `proyecto_fecha_modificacion`) VALUES
(1, 'PP1', NULL, NULL, NULL, '2022-03-12 01:39:17', '2022-03-11 19:39:17'),
(39, 'PP2', 'PP2', 1, NULL, '2022-03-12 01:40:29', '2022-03-11 19:40:29'),
(40, 'PP3', '', 4, NULL, '2022-03-12 05:23:28', '2022-03-11 23:23:28'),
(41, 'PP4', 'jdnkjcsnkjcdn', 7, NULL, '2022-03-13 02:15:49', '2022-03-12 20:15:49'),
(42, 'PP4', 'jdnkjcsnkjcdn', 1, NULL, '2022-03-13 02:28:26', '2022-03-12 20:28:26'),
(43, 'PP4', 'jdnkjcsnkjcdn', 6, NULL, '2022-03-13 02:30:32', '2022-03-12 20:30:32'),
(44, '', '', 4, NULL, '2022-03-13 02:34:43', '2022-03-12 20:34:43'),
(45, '', '', 8, NULL, '2022-03-13 02:35:12', '2022-03-12 20:35:12'),
(46, '', '', 9, NULL, '2022-03-13 02:37:26', '2022-03-12 20:37:26'),
(47, '', '', 3, NULL, '2022-03-13 02:40:24', '2022-03-12 20:40:24'),
(48, '', '', 2, NULL, '2022-03-13 07:18:04', '2022-03-13 01:18:04'),
(49, NULL, NULL, 1, NULL, '2022-03-13 08:08:34', '2022-03-13 02:08:34'),
(50, NULL, NULL, 1, NULL, '2022-03-13 08:29:59', '2022-03-13 02:29:59'),
(51, NULL, NULL, 6, NULL, '2022-03-13 18:57:32', '2022-03-13 12:57:32'),
(53, NULL, NULL, 8, NULL, '2022-03-13 19:38:46', '2022-03-13 13:38:46'),
(57, NULL, NULL, 1, NULL, '2022-03-13 20:38:05', '2022-03-13 14:38:05'),
(58, NULL, NULL, 2, NULL, '2022-03-13 21:22:33', '2022-03-13 15:22:33'),
(59, NULL, NULL, 9, NULL, '2022-03-14 15:22:16', '2022-03-14 09:22:16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos_cat_cat_t`
--

CREATE TABLE `proyectos_cat_cat_t` (
  `pc_id` bigint(20) NOT NULL,
  `pc_id_proyecto` bigint(20) DEFAULT NULL,
  `pc_id_cat` bigint(20) DEFAULT NULL,
  `pc_id_cat_t` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `proyectos_cat_cat_t`
--

INSERT INTO `proyectos_cat_cat_t` (`pc_id`, `pc_id_proyecto`, `pc_id_cat`, `pc_id_cat_t`) VALUES
(3, 1, 1, NULL),
(4, 1, 1, NULL),
(5, NULL, NULL, NULL),
(6, 1, 1, NULL),
(7, 59, 1, NULL),
(8, 59, 2, NULL),
(9, 59, 3, NULL),
(10, 59, 4, NULL),
(11, 59, 1, NULL),
(12, 59, 2, NULL),
(13, 59, 3, NULL),
(14, 59, 4, NULL),
(15, 59, 1, 23),
(16, 59, 2, 24),
(17, 59, 3, 25),
(18, 59, 4, 26);

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
(1, NULL, 1009),
(2, NULL, 1010),
(3, NULL, 1011),
(4, 1, 1012),
(5, 1, 1013),
(6, 1, 1014),
(7, 1, 1015),
(8, 1, 1016),
(9, 1, 1017),
(10, 1, 1018),
(11, 1, 1021),
(12, 1, 1022),
(15, 9, 1026);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio_producto`
--

CREATE TABLE `servicio_producto` (
  `sp_id` bigint(20) NOT NULL,
  `sp_no_parte` bigint(20) DEFAULT NULL,
  `sp_descripcion` varchar(255) DEFAULT NULL,
  `sp_meses` float DEFAULT NULL,
  `sp_semanas` float DEFAULT NULL,
  `sp_cantidad` int(10) DEFAULT NULL,
  `sp_id_precio` bigint(20) DEFAULT NULL,
  `sp_id_proveedor` int(10) DEFAULT NULL,
  `sp_id_categoria` int(10) DEFAULT NULL,
  `sp_comentarios` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `servicio_producto`
--

INSERT INTO `servicio_producto` (`sp_id`, `sp_no_parte`, `sp_descripcion`, `sp_meses`, `sp_semanas`, `sp_cantidad`, `sp_id_precio`, `sp_id_proveedor`, `sp_id_categoria`, `sp_comentarios`) VALUES
(1007, 0, '', 0, 0, 0, NULL, NULL, NULL, ''),
(1008, 50, '', 0, 0, 0, NULL, NULL, NULL, ''),
(1009, 50, '', 0, 0, 0, NULL, NULL, NULL, ''),
(1010, 60, '', 0, 0, 0, NULL, NULL, NULL, ''),
(1011, 70, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1012, 70, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1013, 70, '', 0, 0, 0, NULL, NULL, NULL, ''),
(1014, 70, '', 0, 0, 0, NULL, NULL, NULL, ''),
(1015, 70, '', 0, 0, 0, NULL, NULL, NULL, ''),
(1016, 70, '', 0, 0, 0, NULL, NULL, NULL, ''),
(1017, 70, '', 0, 0, 0, NULL, 4, 1, ''),
(1018, 180, '', 0, 0, 0, 38, 4, 1, ''),
(1021, 0, '', 0, 0, 0, 41, 8, 2, ''),
(1022, 0, '', 0, 0, 10, 42, 9, 3, ''),
(1024, 8000, '', 0, 0, 0, 45, 12, 2, ''),
(1025, 900, '', 0, 0, 0, 46, 13, 1, ''),
(1026, 1, '', 0, 0, 0, 47, 14, 6, '');

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
(1, 'administrador', 'car@gmail.com', '1234', 1),
(2, 'preventa', 'carlos@gmail.com', '1234', 0),
(3, 'venta', 'car2@gmail.com', '1234', 0);

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
(34, 1, 39),
(35, 1, 40),
(36, 1, 41),
(37, 1, 42),
(38, 1, 43),
(39, 1, 44),
(40, 1, 45),
(41, 1, 46),
(42, 1, 47),
(43, 1, 48),
(44, 1, 49),
(45, 1, 50),
(46, 1, 51),
(47, 1, 53),
(48, 1, 57),
(49, 1, 58),
(50, 1, 59);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `am`
--
ALTER TABLE `am`
  ADD PRIMARY KEY (`am_id`),
  ADD KEY `fk_am_id_proyecto` (`am_id_proyecto`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`categoria_id`);

--
-- Indices de la tabla `categorias_c_a_sptn_ma`
--
ALTER TABLE `categorias_c_a_sptn_ma`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indices de la tabla `cat_totales`
--
ALTER TABLE `cat_totales`
  ADD PRIMARY KEY (`ct_id`);

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
  ADD KEY `fk_ci_id_am` (`ci_id_am`);

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
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`proveedor_id`);

--
-- Indices de la tabla `proveedor_marca`
--
ALTER TABLE `proveedor_marca`
  ADD PRIMARY KEY (`pm_id`),
  ADD KEY `fk_p_m_id_proveedor` (`pm_id_proveedor`),
  ADD KEY `fk_p_m_id_marca` (`pm_id_marca`);

--
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD PRIMARY KEY (`proyecto_id`),
  ADD KEY `fk_proyecto_id_cliente` (`proyecto_id_cliente`),
  ADD KEY `fk_proyecto_id_cat` (`proyecto_id_cat_c_a_sptn_ma`);

--
-- Indices de la tabla `proyectos_cat_cat_t`
--
ALTER TABLE `proyectos_cat_cat_t`
  ADD PRIMARY KEY (`pc_id`),
  ADD KEY `fk_pc_id_proyecto` (`pc_id_proyecto`),
  ADD KEY `fk_pc_id_cat` (`pc_id_cat`),
  ADD KEY `fk_pc_id_cat_t` (`pc_id_cat_t`);

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
  ADD KEY `fk_sp_id_proveedor` (`sp_id_proveedor`),
  ADD KEY `fk_sp_id_categoria` (`sp_id_categoria`);

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
  MODIFY `am_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `categoria_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `categorias_c_a_sptn_ma`
--
ALTER TABLE `categorias_c_a_sptn_ma`
  MODIFY `cat_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `cat_totales`
--
ALTER TABLE `cat_totales`
  MODIFY `ct_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `cliente_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `colaboradores`
--
ALTER TABLE `colaboradores`
  MODIFY `colab_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `costos_indirectos`
--
ALTER TABLE `costos_indirectos`
  MODIFY `ci_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `marca_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `moneda`
--
ALTER TABLE `moneda`
  MODIFY `moneda_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `partida`
--
ALTER TABLE `partida`
  MODIFY `partida_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `pp`
--
ALTER TABLE `pp`
  MODIFY `pp_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `precio`
--
ALTER TABLE `precio`
  MODIFY `precio_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  MODIFY `proveedor_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `proveedor_marca`
--
ALTER TABLE `proveedor_marca`
  MODIFY `pm_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `proyecto_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT de la tabla `proyectos_cat_cat_t`
--
ALTER TABLE `proyectos_cat_cat_t`
  MODIFY `pc_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `psp`
--
ALTER TABLE `psp`
  MODIFY `psp_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `servicio_producto`
--
ALTER TABLE `servicio_producto`
  MODIFY `sp_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1027;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios_proyectos`
--
ALTER TABLE `usuarios_proyectos`
  MODIFY `up_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `am`
--
ALTER TABLE `am`
  ADD CONSTRAINT `fk_am_id_proyecto` FOREIGN KEY (`am_id_proyecto`) REFERENCES `proyecto` (`proyecto_id`) ON UPDATE CASCADE;

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
  ADD CONSTRAINT `fk_ci_id_am` FOREIGN KEY (`ci_id_am`) REFERENCES `am` (`am_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `pp`
--
ALTER TABLE `pp`
  ADD CONSTRAINT `fk_pp_id_partida` FOREIGN KEY (`pp_id_partida`) REFERENCES `partida` (`partida_id`),
  ADD CONSTRAINT `fk_pp_id_proyecto` FOREIGN KEY (`pp_id_proyecto`) REFERENCES `proyecto` (`proyecto_id`);

--
-- Filtros para la tabla `precio`
--
ALTER TABLE `precio`
  ADD CONSTRAINT `fk_precio_id_moneda` FOREIGN KEY (`precio_id_moneda`) REFERENCES `moneda` (`moneda_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `proveedor_marca`
--
ALTER TABLE `proveedor_marca`
  ADD CONSTRAINT `fk_p_m_id_marca` FOREIGN KEY (`pm_id_marca`) REFERENCES `marca` (`marca_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_p_m_id_proveedor` FOREIGN KEY (`pm_id_proveedor`) REFERENCES `proveedor` (`proveedor_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD CONSTRAINT `fk_proyecto_id_cat` FOREIGN KEY (`proyecto_id_cat_c_a_sptn_ma`) REFERENCES `categorias_c_a_sptn_ma` (`cat_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_proyecto_id_cliente` FOREIGN KEY (`proyecto_id_cliente`) REFERENCES `clientes` (`cliente_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `proyectos_cat_cat_t`
--
ALTER TABLE `proyectos_cat_cat_t`
  ADD CONSTRAINT `fk_pc_id_cat` FOREIGN KEY (`pc_id_cat`) REFERENCES `categorias_c_a_sptn_ma` (`cat_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_pc_id_cat_t` FOREIGN KEY (`pc_id_cat_t`) REFERENCES `cat_totales` (`ct_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_pc_id_proyecto` FOREIGN KEY (`pc_id_proyecto`) REFERENCES `proyecto` (`proyecto_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `psp`
--
ALTER TABLE `psp`
  ADD CONSTRAINT `fk_psp_id_partida` FOREIGN KEY (`psp_id_partida`) REFERENCES `partida` (`partida_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_psp_id_sp` FOREIGN KEY (`psp_id_sp`) REFERENCES `servicio_producto` (`sp_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `servicio_producto`
--
ALTER TABLE `servicio_producto`
  ADD CONSTRAINT `fk_sp_id_categoria` FOREIGN KEY (`sp_id_categoria`) REFERENCES `categoria` (`categoria_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_sp_id_precio` FOREIGN KEY (`sp_id_precio`) REFERENCES `precio` (`precio_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_sp_id_proveedor` FOREIGN KEY (`sp_id_proveedor`) REFERENCES `proveedor` (`proveedor_id`) ON UPDATE CASCADE;

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

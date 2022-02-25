-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-02-2022 a las 23:49:31
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
  `am_id_proyecto` bigint(20) DEFAULT NULL,
  `am_id_pt` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `categoria_id` int(10) NOT NULL,
  `categoria_nombre` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias_c_a_sptn_ma`
--

CREATE TABLE `categorias_c_a_sptn_ma` (
  `cat_id` bigint(20) NOT NULL,
  `cat_nombre` varchar(100) NOT NULL,
  `cat_id_pt` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `cliente_id` int(11) NOT NULL,
  `nombre_cliente` varchar(50) NOT NULL,
  `razon_social` varchar(50) NOT NULL,
  `telefono` bigint(10) NOT NULL,
  `id_direccion` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Estructura de tabla para la tabla `direccion`
--

CREATE TABLE `direccion` (
  `direccion_id` bigint(20) NOT NULL,
  `direccion_calle` varchar(100) NOT NULL,
  `direccion_no_exterior` int(10) NOT NULL,
  `direccion_no_interior` int(10) DEFAULT NULL,
  `direccion_colonia` varchar(100) NOT NULL,
  `direccion_cp` int(10) NOT NULL,
  `direccion_alcaldia_municipio` varchar(100) NOT NULL,
  `direccion_id_estado` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `estado_id` int(2) NOT NULL,
  `estado_nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `marca_id` int(10) NOT NULL,
  `marca_nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `moneda`
--

CREATE TABLE `moneda` (
  `moneda_id` int(10) NOT NULL,
  `moneda_nombre` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partida`
--

CREATE TABLE `partida` (
  `partida_id` bigint(20) NOT NULL,
  `partida_nombre` varchar(255) DEFAULT NULL,
  `partida_descripcion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pp`
--

CREATE TABLE `pp` (
  `pp_id` bigint(20) NOT NULL,
  `pp_id_proyecto` bigint(20) DEFAULT NULL,
  `pp_id_partida` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `precio`
--

CREATE TABLE `precio` (
  `precio_id` bigint(20) NOT NULL,
  `precio_cantidad` int(10) DEFAULT NULL,
  `precio_lista` decimal(20,3) DEFAULT NULL,
  `precio_unitario` decimal(20,3) DEFAULT NULL,
  `precio_descuento` float DEFAULT NULL,
  `precio_id_pt` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `precios_totales`
--

CREATE TABLE `precios_totales` (
  `pt_id` bigint(20) NOT NULL,
  `pt_total` decimal(20,3) DEFAULT NULL,
  `pt_id_moneda` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor_marca`
--

CREATE TABLE `proveedor_marca` (
  `pm_id` int(10) NOT NULL,
  `pm_id_proveedor` int(10) DEFAULT NULL,
  `pm_id_marca` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `proyecto_id` bigint(20) NOT NULL,
  `proyecto_clave` varchar(255) DEFAULT NULL,
  `proyecto_descripcion` text DEFAULT NULL,
  `proyecto_id_cliente` int(11) DEFAULT NULL,
  `proyecto_id_cat_c_a_sptn_ma` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `psp`
--

CREATE TABLE `psp` (
  `psp_id` bigint(20) NOT NULL,
  `psp_id_partida` bigint(20) DEFAULT NULL,
  `psp_id_sp` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `sp_id_precio` bigint(20) DEFAULT NULL,
  `sp_id_proveedor` int(10) DEFAULT NULL,
  `sp_id_categoria` int(10) DEFAULT NULL,
  `sp_comentarios` text DEFAULT NULL
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
  `estado_login` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `rol`, `email`, `password`, `estado_login`) VALUES
(1, 'preventa', 'car', '1234', b'0');

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
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `am`
--
ALTER TABLE `am`
  ADD PRIMARY KEY (`am_id`),
  ADD KEY `fk_am_id_pt` (`am_id_pt`),
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
  ADD PRIMARY KEY (`cat_id`),
  ADD KEY `fk_cad_id_pt` (`cat_id_pt`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`cliente_id`),
  ADD KEY `fk_cliente_id_direccion` (`id_direccion`);

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
-- Indices de la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD PRIMARY KEY (`direccion_id`),
  ADD KEY `fk_direccion_id_estado` (`direccion_id_estado`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`estado_id`);

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
  ADD KEY `fk_pp_id_proyecto` (`pp_id_proyecto`),
  ADD KEY `fk_pp_id_partida` (`pp_id_partida`);

--
-- Indices de la tabla `precio`
--
ALTER TABLE `precio`
  ADD PRIMARY KEY (`precio_id`),
  ADD KEY `fk_precio_id_pt` (`precio_id_pt`);

--
-- Indices de la tabla `precios_totales`
--
ALTER TABLE `precios_totales`
  ADD PRIMARY KEY (`pt_id`),
  ADD KEY `fk_pt_id_moneda` (`pt_id_moneda`);

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
-- Indices de la tabla `psp`
--
ALTER TABLE `psp`
  ADD PRIMARY KEY (`psp_id`),
  ADD KEY `fk_psp_id_partida` (`psp_id_partida`),
  ADD KEY `fk_psp_id_sp` (`psp_id_sp`);

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
  MODIFY `am_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `categoria_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorias_c_a_sptn_ma`
--
ALTER TABLE `categorias_c_a_sptn_ma`
  MODIFY `cat_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `cliente_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `colaboradores`
--
ALTER TABLE `colaboradores`
  MODIFY `colab_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `costos_indirectos`
--
ALTER TABLE `costos_indirectos`
  MODIFY `ci_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `direccion`
--
ALTER TABLE `direccion`
  MODIFY `direccion_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `estado_id` int(2) NOT NULL AUTO_INCREMENT;

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
-- AUTO_INCREMENT de la tabla `pp`
--
ALTER TABLE `pp`
  MODIFY `pp_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `precio`
--
ALTER TABLE `precio`
  MODIFY `precio_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `precios_totales`
--
ALTER TABLE `precios_totales`
  MODIFY `pt_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  MODIFY `proveedor_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proveedor_marca`
--
ALTER TABLE `proveedor_marca`
  MODIFY `pm_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `proyecto_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `psp`
--
ALTER TABLE `psp`
  MODIFY `psp_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `servicio_producto`
--
ALTER TABLE `servicio_producto`
  MODIFY `sp_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios_proyectos`
--
ALTER TABLE `usuarios_proyectos`
  MODIFY `up_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `am`
--
ALTER TABLE `am`
  ADD CONSTRAINT `fk_am_id_proyecto` FOREIGN KEY (`am_id_proyecto`) REFERENCES `proyecto` (`proyecto_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_am_id_pt` FOREIGN KEY (`am_id_pt`) REFERENCES `precios_totales` (`pt_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `categorias_c_a_sptn_ma`
--
ALTER TABLE `categorias_c_a_sptn_ma`
  ADD CONSTRAINT `fk_cad_id_pt` FOREIGN KEY (`cat_id_pt`) REFERENCES `precios_totales` (`pt_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `fk_cliente_id_direccion` FOREIGN KEY (`id_direccion`) REFERENCES `direccion` (`direccion_id`) ON UPDATE CASCADE;

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
-- Filtros para la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD CONSTRAINT `fk_direccion_id_estado` FOREIGN KEY (`direccion_id_estado`) REFERENCES `estado` (`estado_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `pp`
--
ALTER TABLE `pp`
  ADD CONSTRAINT `fk_pp_id_partida` FOREIGN KEY (`pp_id_partida`) REFERENCES `partida` (`partida_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_pp_id_proyecto` FOREIGN KEY (`pp_id_proyecto`) REFERENCES `proyecto` (`proyecto_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `precio`
--
ALTER TABLE `precio`
  ADD CONSTRAINT `fk_precio_id_pt` FOREIGN KEY (`precio_id_pt`) REFERENCES `precios_totales` (`pt_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `precios_totales`
--
ALTER TABLE `precios_totales`
  ADD CONSTRAINT `fk_pt_id_moneda` FOREIGN KEY (`pt_id_moneda`) REFERENCES `moneda` (`moneda_id`) ON UPDATE CASCADE;

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
-- Filtros para la tabla `psp`
--
ALTER TABLE `psp`
  ADD CONSTRAINT `fk_psp_id_partida` FOREIGN KEY (`psp_id_partida`) REFERENCES `partida` (`partida_id`) ON UPDATE CASCADE,
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

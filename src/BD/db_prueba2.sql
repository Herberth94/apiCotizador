-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3307
-- Tiempo de generación: 22-02-2022 a las 03:57:52
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
  `am_id` int(10) NOT NULL,
  `am_desc_cliente` float NOT NULL,
  `am_margen_ganancia` float NOT NULL,
  `am_desc_fabrica` float NOT NULL
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
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `cliente_id` int(11) NOT NULL,
  `nombre_cliente` varchar(255) NOT NULL,
  `razon_social` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `costos_indirectos`
--

CREATE TABLE `costos_indirectos` (
  `ci_id` int(10) NOT NULL,
  `ci_porcentajes` float NOT NULL
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
  `partida_id_sp` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `precio`
--

CREATE TABLE `precio` (
  `precio_id` bigint(20) NOT NULL,
  `precio_lista` decimal(20,3) NOT NULL,
  `precio_unitario` decimal(20,3) NOT NULL,
  `precio_descuento` float NOT NULL,
  `precio_id_moneda` int(10) NOT NULL
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
-- Estructura de tabla para la tabla `proveedor_marca`
--

CREATE TABLE `proveedor_marca` (
  `pm_id` int(10) NOT NULL,
  `pm_id_proveedor` int(10) NOT NULL,
  `pm_id_marca` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `proyecto_id` bigint(20) NOT NULL,
  `proyecto_clave` varchar(255) NOT NULL,
  `proyecto_descripcion` text NOT NULL,
  `proyecto_id_partida` bigint(20) NOT NULL,
  `proyecto_valor_dolar` float NOT NULL,
  `proyecto_id_cliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio_producto`
--

CREATE TABLE `servicio_producto` (
  `sp_id` bigint(20) NOT NULL,
  `sp_no_parte` bigint(20) NOT NULL,
  `sp_descripcion` varchar(255) NOT NULL,
  `sp_meses` float NOT NULL,
  `sp_semanas` float NOT NULL,
  `sp_cantidad` int(20) NOT NULL,
  `sp_id_precio` bigint(20) NOT NULL,
  `sp_total_mxn` decimal(20,3) NOT NULL,
  `sp_total_usd` decimal(20,3) NOT NULL,
  `sp_total_bom` decimal(20,3) NOT NULL,
  `sp_id_proveedor` int(10) NOT NULL,
  `sp_id_categoria` int(10) NOT NULL,
  `sp_comentarios` text NOT NULL,
  `sp_id_am` int(10) NOT NULL,
  `sp_id_costos_indirectos` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `rol` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `rol`, `email`, `password`) VALUES
(1, 'preventa', 'car', '1234');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_clientes`
--

CREATE TABLE `usuarios_clientes` (
  `id_user` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `am`
--
ALTER TABLE `am`
  ADD PRIMARY KEY (`am_id`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`categoria_id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`cliente_id`);

--
-- Indices de la tabla `costos_indirectos`
--
ALTER TABLE `costos_indirectos`
  ADD PRIMARY KEY (`ci_id`);

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
  ADD KEY `fk_partida_id_sp` (`partida_id_sp`);

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
  ADD KEY `fk_proyecto_id_partida` (`proyecto_id_partida`),
  ADD KEY `fk_proyecto_id_cliente` (`proyecto_id_cliente`);

--
-- Indices de la tabla `servicio_producto`
--
ALTER TABLE `servicio_producto`
  ADD PRIMARY KEY (`sp_id`),
  ADD KEY `fk_sp_id_precio` (`sp_id_precio`),
  ADD KEY `fk_sp_id_proveedor` (`sp_id_proveedor`),
  ADD KEY `fk_sp_id_categoria` (`sp_id_categoria`),
  ADD KEY `fk_sp_id_am` (`sp_id_am`),
  ADD KEY `fk_sp_id_costos_indirectos` (`sp_id_costos_indirectos`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `usuarios_clientes`
--
ALTER TABLE `usuarios_clientes`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `cliente_fk` (`id_cliente`),
  ADD KEY `usuario_fk` (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `am`
--
ALTER TABLE `am`
  MODIFY `am_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `categoria_id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `cliente_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `costos_indirectos`
--
ALTER TABLE `costos_indirectos`
  MODIFY `ci_id` int(10) NOT NULL AUTO_INCREMENT;

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
-- AUTO_INCREMENT de la tabla `precio`
--
ALTER TABLE `precio`
  MODIFY `precio_id` bigint(20) NOT NULL AUTO_INCREMENT;

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
-- AUTO_INCREMENT de la tabla `servicio_producto`
--
ALTER TABLE `servicio_producto`
  MODIFY `sp_id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios_clientes`
--
ALTER TABLE `usuarios_clientes`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `partida`
--
ALTER TABLE `partida`
  ADD CONSTRAINT `fk_partida_id_sp` FOREIGN KEY (`partida_id_sp`) REFERENCES `servicio_producto` (`sp_id`) ON UPDATE CASCADE;

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
  ADD CONSTRAINT `fk_proyecto_id_partida` FOREIGN KEY (`proyecto_id_partida`) REFERENCES `partida` (`partida_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `servicio_producto`
--
ALTER TABLE `servicio_producto`
  ADD CONSTRAINT `fk_sp_id_am` FOREIGN KEY (`sp_id_am`) REFERENCES `am` (`am_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_sp_id_categoria` FOREIGN KEY (`sp_id_categoria`) REFERENCES `categoria` (`categoria_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_sp_id_costos_indirectos` FOREIGN KEY (`sp_id_costos_indirectos`) REFERENCES `costos_indirectos` (`ci_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_sp_id_precio` FOREIGN KEY (`sp_id_precio`) REFERENCES `precio` (`precio_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_sp_id_proveedor` FOREIGN KEY (`sp_id_proveedor`) REFERENCES `proveedor` (`proveedor_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios_clientes`
--
ALTER TABLE `usuarios_clientes`
  ADD CONSTRAINT `cliente_fk` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`cliente_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `usuario_fk` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

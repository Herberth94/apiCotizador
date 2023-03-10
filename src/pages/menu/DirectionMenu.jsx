import React from 'react'

function DirectionMenu() {
    return (
        <div class="">
            <div class="menu-btn">
                <button id='menu'><i class="fas fa-bars"></i></button>
            </div>


            <div class="side-bar">

                <header>
                    <div class="close-btn">
                     <i class="fas fa-times"></i>           
                    </div>
                    <h1>MARVILOP</h1>
                </header>
                <div class="menu">
                    <div class="item"><a href="#"><i className="fas fa-home"></i>Home</a></div>
                    <div class="item">
                        <a class="sub-btn"><i class="fas fa-users"></i>Registros<i class="fas fa-angle-right dropdown"></i></a>
                        <div class="sub-menu">
                            <a href="registrar-usuarios" class="sub-item"><i class="fas fa-user"></i>Usuarios</a>
                            <a href="registrar-usuarios" class="sub-item"><i class="fas fa-user"></i>Clientes</a>
                            <a href="registrar-usuarios" class="sub-item"><i class="fas fa-user"></i>Marcas</a>
                            <a href="registrar-usuarios" class="sub-item"><i class="fas fa-user"></i>Proveedores</a>
                            <a href="registrar-usuarios" class="sub-item"><i class="fas fa-user"></i>Colaboradores</a>
                        </div>
                    </div>



                    <div class="item">
                        <a class="sub-btn"><i class="fas fa-table"></i>Tables<i class="fas fa-angle-right dropdown"></i></a>
                        <div class="sub-menu">
                            <a href="#" class="sub-item">Sub Item 01</a>
                            <a href="#" class="sub-item">Sub Item 02</a>
                            <a href="#" class="sub-item">Sub Item 03</a>
                        </div>
                    </div>


                    <div class="item"><a href="#"><i class="fas fa-th"></i>Forms</a></div>
                    <div class="item">
                        <a class="sub-btn"><i class="fas fa-cogs"></i>Settings<i class="fas fa-angle-right dropdown"></i></a>
                        <div class="sub-menu">
                            <a href="#" class="sub-item">Sub Item 01</a>
                            <a href="#" class="sub-item">Sub Item 02</a>
                        </div>
                    </div>
                    <div class="item"><a href="#"><i class="fas fa-info-circle"></i>About</a></div>
                </div>
            </div>
        </div>

    )
}

export default DirectionMenu
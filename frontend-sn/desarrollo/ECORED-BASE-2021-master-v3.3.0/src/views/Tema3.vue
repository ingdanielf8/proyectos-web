<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.mb-5
        .titulo-principal__numero
          span 3
        h1 Normalización
    .row.mt-4
      .col-12.col-lg-9
        p La normalización es el procedimiento mediante el cual se aplican las reglas de mapeo o conversión de un modelo entidad-relación a un modelo relacional, es decir a tablas y relaciones, los principios rectores de este proceso son: no redundancia de datos (que no se repitan los datos) y la dependencia de los datos dependencia incoherente (una separación lógica de datos en tablas). 
        p.mt-3 Los datos redundantes desperdician espacio en disco y crean problemas de mantenimiento. Por ejemplo, en la figura 20 se ve que los datos comunes de los clientes y los bancos están en la tabla persona, mientras que los datos que pertenecen exclusivamente a los empleados están en otra tabla que se relaciona con la de personas.
      .col-3.d-none.d-lg-block
        figure
          img(src="@/assets/template/tema-3-1.svg" alt="Texto que describa la imagen")
    p.mt-4 ¿Qué es una “dependencia incoherente”? Aunque resulta intuitivo para un usuario buscar en la tabla de persona el correo de un cliente en particular, es posible que no tenga sentido buscar en esa columna el salario del empleado que se relaciona con esos datos de la tabla persona, pues el salario del empleado está relacionado con la tabla empleado o depende de él. Las dependencias incoherentes pueden dificultar el acceso a los datos, ya que la ruta para encontrar los datos puede faltar o estar dañada    
    figure.mt-4
      img(src="@/assets/template/tema-3-2.png" alt="Texto que describa la imagen")
    .h4.mt-5 Formas normales
    .tabla-b.color-acento-contenido.mb-0.mt-5
      table(style="border: solid 1px #e8e8e8;").text-center
        caption.mt-3 Referencia Tabla - Norma APA
        tr.bg-secundario.text-white.text-center
          th(style="width: 245px;")
            .h4.mb-0.text-center Forma normal
          td 
            .h4.mb-0.text-center Principios
        tr
          th.text-center Primera forma normal
          td 
            .row
              .col-sm.mb-5.mb-sm-0
                ul.lista-ul
                  li.mb-0.d-block
                    .row
                      .col-1.p-0
                        i.fas.fa-angle-right.color-azul
                      .col-10.p-0(style='margin-left: -55px; text-align: left;')
                        p.mb-2 Eliminar grupos de repetición en tablas individuales.
                  li.mb-0.d-block.mt-1
                    .row
                      .col-1.p-0
                        i.fas.fa-angle-right.color-azul
                      .col-10.p-0(style='margin-left: -55px; text-align: left;')
                        p.mb-2 Crear una tabla independiente para cada conjunto de datos relacionados.
                  li.mb-0.d-block.mt-1
                    .row
                      .col-1.p-0
                        i.fas.fa-angle-right.color-azul
                      .col-10.p-0(style='margin-left: -55px; text-align: left;')
                        p.mb-2 Identificar cada conjunto de datos relacionados con una clave primaria.
        tr
          th.text-center Segunda forma normal
          td 
            .row
              .col-sm.mb-5.mb-sm-0
                ul.lista-ul
                  li.mb-0.d-block
                    .row
                      .col-1.p-0
                        i.fas.fa-angle-right.color-azul
                      .col-10.p-0(style='margin-left: -55px; text-align: left;')
                        p.mb-2 Crear tablas independientes para conjuntos de valores que se aplican a varios registros.
                  li.mb-0.d-block.mt-1
                    .row
                      .col-1.p-0
                        i.fas.fa-angle-right.color-azul
                      .col-10.p-0(style='margin-left: -55px; text-align: left;')
                        p.mb-2 Relacionar estas tablas con una clave foránea.
        tr
          th.text-center Tercera forma normal
          td 
            .row
              .col-sm.mb-5.mb-sm-0
                ul.lista-ul
                  li.mb-0.d-block
                    .row
                      .col-1.p-0
                        i.fas.fa-angle-right.color-azul
                      .col-10.p-0(style='margin-left: -55px; text-align: left;')
                        p.mb-2 Eliminar los campos que no dependen de la clave.
    p.mt-4 Hay una cuarta forma normal, también llamada forma normal de #[strong Boyce Codd (BCNF)], y una quinta forma normal, pero rara vez se consideran en un diseño práctico, solo agregan complejidad al sistema y no aportan un valor funcional que aporte a la solución del problema, por esta razón no será tratada.
    .titulo-segundo.mt-5
      #t_3_1.h4 3.1  Dependencias funcionales
    .row.mt-4
      .col-12.col-lg-10.align-self-center
        p Una dependencia funcional es un tipo de restricción que termina construyendo una generalización del concepto de clave, como se estudió en el modelo E-R y en el modelo relacional. Pero no es tan fácil localizar las dependencias, ya que necesitan de un análisis de los atributos (columnas) o, con más precisión, de las interrelaciones entre atributos y, frecuentemente, la intuición no es suficiente a la hora de encontrar y clasificar todas las dependencias. Aunque existe una teoría matemática para realizar este análisis, un ejemplo sencillo puede enseñar cómo analizar estas dependencias de manera intuitiva, tal como se verá a continuación.
      .col-2.d-none.d-lg-block.align-self-center
        figure
          img(src="@/assets/template/tema-3-3.svg" alt="Texto que describa la imagen")
    .h4.mt-5 Ejemplo
    p.mt-4 Un cliente pide que desarrolle un software para llevar el inventario de una ferretería, los productos, los proveedores, el precio al que cada proveedor vende cada producto, para lo cual suministra la siguiente tabla, y se debe identificar las dependencias funcionales para poder realizar un modelo relacional.
    .h4.mt-5.text-center Proveedores, productos y precios
    figure.mt-4
      img(src="@/assets/template/tema-3-4.png" alt="Texto que describa la imagen")
    p.mt-4 El principio de no repetición de datos indica que se deben identificar todos los datos que se repiten y se puede en la siguiente figura, tenido en cuenta los colores de sombreado como se muestra, en la figura 21, es de notar que el nit_proveedor son iguales en todos registros que tienen el mismo valor de correo, nombres y teléfono. 
    .h4.mt-5.text-center Dependencia de nit_proveedor con datos del proveedor
    figure.mt-4  
      img(src="@/assets/template/tema-3-5.png" alt="Texto que describa la imagen")
    p.mt-4 También en la figura 22 la columna #[strong código_producto] es la misma para la columna producto, pero difiere del precio que cada proveedor ofrece del mismo.
    .h4.mt-5.text-center Dependencia de código_producto_ con datos del producto
    figure.mt-4
      img(src="@/assets/template/tema-3-6.png" alt="Texto que describa la imagen")
    p.mt-4 La dependencia #[strong código_producto] no se cumple para el precio del producto, por lo tanto, dice que a cada proveedor y producto debe existir un precio distinto como se ve en la siguiente figura.
    .h4.mt-5.text-center Dependencia de nit_proveedor, código_producto_ con precio del producto
    figure.mt-4
      img(src="@/assets/template/tema-3-7.png" alt="Texto que describa la imagen")
    p.mt-4 En la siguiente tabla se observan las dependencias detectadas.
    .h4.mt-5 Formas normales
    .row.mt-4
      .col-10.col-md-8.offset-1.offset-md-2
        .tabla-b.color-acento-contenido.mb-0.mt-5
          table(style="border: solid 1px #e8e8e8;").text-center
            caption.mt-3 Referencia Tabla - Norma APA
            tr.bg-amarillo.text-center
              th(style="width: 245px;")
                .h4.mb-0.text-center Atributo
              td 
                .h4.mb-0.text-center Es dependencia funcional de: 
            tr
              th.text-center nit_proveedor 
              td 
                .row
                  .col-sm.mb-5.mb-sm-0
                    ul.lista-ul.mb-0
                      li.mb-0.d-block
                        .row
                          .col-1.p-0
                            i.fas.fa-angle-right.color-amarillo
                          .col-10.p-0(style='margin-left: -15px; text-align: left;')
                            p.mb-2 Correo
                      li.mb-0.d-block.mt-1
                        .row
                          .col-1.p-0
                            i.fas.fa-angle-right.color-amarillo
                          .col-10.p-0(style='margin-left: -15px; text-align: left;')
                            p.mb-2 Nombres
                      li.mb-0.d-block.mt-1
                        .row
                          .col-1.p-0
                            i.fas.fa-angle-right.color-amarillo
                          .col-10.p-0(style='margin-left: -15px; text-align: left;')
                            p.mb-2 Teléfono
            tr
              th.text-center codigo_producto
              td 
                .row
                  .col-sm.mb-5.mb-sm-0
                    ul.lista-ul
                      li.mb-0.d-block
                        .row
                          .col-1.p-0
                            i.fas.fa-angle-right.color-amarillo
                          .col-10.p-0(style='margin-left: -15px; text-align: left;')
                            p.mb-2 Producto
            tr
              th.text-center nit_proveedor, codigo_producto  
              td 
                .row
                  .col-sm.mb-5.mb-sm-0
                    ul.lista-ul
                      li.mb-0.d-block
                        .row
                          .col-1.p-0
                            i.fas.fa-angle-right.color-amarillo
                          .col-10.p-0(style='margin-left: -15px; text-align: left;')
                            p.mb-2 Precio
    .row.mt-5
      .col-8.offset-2 
        .cajon.color-secundario.bg-secundario-op10.p-4
          .h4 Definición formal DEPENDENCIA FUNCIONAL
          p.m-0 Se dice que un atributo X de una relación “depende funcionalmente” de otro atributo o conjunto de atributos Y de la relación si a todo valor (o valores del conjunto) Y le corresponde siempre el mismo valor de X.
    p.mt-4 Las dependencias funcionales de la tabla 5 se pueden representar en modelo entidad relación, teniendo en cuenta que un proveedor puede suministrar muchos productos y, a su vez, un producto puede ser proveedor por más de un proveedor, y que por cada producto que es proveedor por un proveedor existe un precio. 
    .h4.mt-5 Diagrama entidad relación dependencia funcional
    figure.mt-4
      img(src="@/assets/template/tema-3-8.png" alt="Texto que describa la imagen")
    p.mt-4 Como se puede notar en la figura 24, la relación provee, cuando es mapeado a un diagrama relacional, se genera una tabla intermedia provee que debe tener un atributo adicional “precio”.
    .h4.mt-5 Diagrama relacional dependencia funcional
    .row
      .col-12.col-md-8.offset-md-2
        figure.mt-4
          img(src="@/assets/template/tema-3-9.png" alt="Texto que describa la imagen")
    .titulo-segundo.mt-5
      #t_3_2.h4 3.2  Diseño relacional    
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Hasta este punto se han examinado problemas concretos de las formas normales muy básicas y de la normalización. Ahora se estudiará el modo en que se encaja la normalización en proceso general de diseño de bases de datos se puede hacer de una de esas formas:  
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-3-10.svg" alt="Texto que describa la imagen").w-75
    .row.mt-4
      .col-sm.mb-5.mb-sm-0
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            |  Convirtiendo un diagrama entidad relación a un diagrama relacional y de esa forma obtener las tablas. 
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Puede tener una tabla con todos los datos que se procesan en una aplicación e identificado las dependencias funcionales de manera que nos permite identificar las tablas y las llaves o claves primarias de cada una.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Se puede hacer un diseño ad hoc (para que cumpla el requerimiento) y se debe comprobar luego que satisface la forma normal deseada
    p.mt-4 En el mundo práctico y en la medida que se tiene más experticia las opciones 2 y 3 son las más empleadas.
    p.mt-4 A continuación, se muestra un ejemplo completo de cómo abordar un problema de almacenamiento de datos y transformarlo en un modelo relacional, recogiendo los conceptos vistos hasta ahora, pasando de un diagrama entidad relación a un modelo relacional que es en todo caso el objetivo general de un diseño de base de datos
    .h4.mt-5 Problema:
    figure.mt-4
      img(src="@/assets/template/tema-3-11.png" alt="Texto que describa la imagen")
    p.mt-4 Se necesita de gestionar una biblioteca escolar y nuestro cliente quiere tener ciertas herramientas a su disposición para controlar publicaciones tales como libros, revistas, folletos; también llevar un registro de los estudiantes y préstamos. Adicionalmente se necesita un control de los ejemplares de cada libro o publicación, su ubicación y su estado, registrar la retirada de libros por préstamo y restitución de ejemplares, para esto necesita información sobre editoriales datos como dirección, teléfono y nombre de la editorial.
    .row
      .col-12.col-lg-7.align-self-center
        p De cada publicación se pueden tener varios ejemplares, por ejemplo: del libro Nacho lee la biblioteca tiene 5 ejemplares, también de cada publicación se debe conocer, su autor o autores, el tema que trata la publicación (geografía, física, matemática, etc.), la editorial. Cada libro tiene un título, idioma, formato (digital web, impreso, digital CD), código ISBN y fecha de publicación.
        p.mt-3 Cada ejemplar tiene un código de barras, cuando un ejemplar ya está muy descargado se debe poder dar de baja; es decir,que ya se puede botar y no usarlo más. 
        p.mt-3 Tanto el estudiante, como el autor de un libro tienen los siguientes datos: nombres, apellidos, correo. Adicional a un estudiante tiene los datos de documento de identidad, teléfono, dirección, grado escolar. 
        p.mt-3 De cada préstamo interesa saber qué ejemplar se prestó, fecha en la que se prestó, la fecha en que se devolvió y alguna nota o comentario.
      .col-lg-5.d-none.d-lg-block
        figure
          img(src="@/assets/template/tema-3-12.png" alt="Texto que describa la imagen")
    .h4.mt-5 Análisis de relacionar autor
    .row.mt-4
      .col-12.col-md-8.offset-md-2
        figure
          img(src="@/assets/template/tema-3-13.png" alt="Texto que describa la imagen")
    .row.mt-5
      .col-12.col-lg-9
        p En este diagrama se presenta una posible solución:
        p.mt-3 La relación entre persona y estudiante corresponde al caso estudiado en las relaciones de uno a uno (entre persona y empleado del banco) de la figura 20. 
        p.mt-3 El tema se vuelve complejo porque se debe analizar si aplica lo mismo para autor:
        p.mt-3 Al mapear estas entidades a diagrama relacional resultan 3 tablas (estudiante, persona y autor), pero autor solo tendría una única columna y al no tener atributos adicionales relacionados con el autor es prácticamente lo mismo que tener la tabla persona, por lo tanto, no es conveniente dejarlo de esta forma y más bien relacionar la publicación directamente con la entidad persona.
      .col-3.d-none.d-lg-block.align-self-center
        figure
          img(src="@/assets/template/tema-3-14.svg" alt="Texto que describa la imagen")
    .h4.mt-5 Para recordar: 
    .row.mt-4
      .col-8.offset-2 
        .cajon.color-secundario.bg-secundario-op25.p-4
          .row
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-3-15.svg" alt="Texto que describa la imagen")
            .col-12.col-lg-9
              p.m-0 Una relación de muchos a muchos (N:N) se convierte en una tabla cuya llave primaria es computar por las llaves foráneas de las otras dos tablas, Una relación de uno a muchos (1:N) se convierte en una columna  (llave foránea) de la tabla que tiene los muchos, y finalmente una relación de uno a uno (1:1) se convierte una columna en cualquier (llave foránea) de las dos tablas. 
    .h4.mt-5 Modelo entidad relación biblioteca
    figure
      img(src="@/assets/template/tema-3-16.png" alt="Texto que describa la imagen")
    p.mt-4 En la siguiente figura se presenta el   modelo en un diagrama relacional, este es importante ya que hace parte de uno de los subproductos que, por petición del cliente, muchas veces es un entregable en un proyecto de software, no es así con el diagrama entidad relación ya que este tipo de diagrama requiere más formas y contiene menos tecnicismos.
    .h4.mt-5 Modelo relacional
    figure.mt-4
      img(src="@/assets/template/tema-3-17.png" alt="Texto que describa la imagen")
    p.mt-4 Hasta ahora se ha visto cómo distribuir el almacenamiento de los datos en tablas, de manera que no se permita la duplicidad de datos y procurando una estructura lógica, que presente la información del mundo real. Pero aún falta analizar el problema desde el punto de vista que permita garantizar que los datos que se van a insertar son correctos. Para lo cual es importante conocer las restricciones de integridad que puede tener una base de datos.
    .titulo-segundo.mt-5
      #t_3_3.h4 3.3  Reglas de integridad
    figure.mt-5
      img(src="@/assets/template/tema-3-18.png" alt="Texto que describa la imagen")
    p.mt-4 La calidad de los datos garantiza que los datos almacenados en la base de datos cumplan con los estándares y requisitos de la organización. En otras palabras, asegura el mantenimiento de la integridad de los datos en una base de datos. Al hacerlo, aplica un conjunto de reglas a un conjunto de datos completo o específico y se almacena en la base de datos de destino, por lo consiguiente, para garantizar la integridad se debe tener en cuenta: 
    .tarjeta.color-acento-botones.p-3.mt-5.bg-degradado-azul
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/tema-3-19.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.text-white
              h3.mb-1 Tipos de enteros: 
              p.text-small Tipos de enteros: https://dev.mysql.com/doc/refman/8.0/en/integer-types.html  
            .col-sm-auto
              a.boton.color-acento-contenido(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    p.mt-4 La calidad de los datos garantiza que los datos almacenados en la base de datos cumplan con los estándares y requisitos de la organización. En otras palabras, asegura el mantenimiento de la integridad de los datos en una base de datos. Al hacerlo, aplica un conjunto de reglas a un conjunto de datos completo o específico y se almacena en la base de datos de destino, por lo consiguiente, para garantizar la integridad se debe tener en cuenta: 
    .row.mt-5
      .col-8.offset-2
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD
          p.text-small(numero="1" titulo="Criterio de NULIDAD") Cuando en una fila un atributo (columna) es desconocido, se dice que es nulo. Un nulo no representa el valor cero (0) ni una cadena vacía (“”) ya que éstos son valores tienen un significado o valor. El nulo significa ausencia de información, bien porque al insertar la fila se desconocía el valor del atributo, o tal vez porque para dicha fila el atributo no tiene valor. Debido a que los nulos no son valores, deben tratarse de forma particular, lo que causa problemas de implementación. Actualmente casi todos los SGDB soportan valores nulos.
          
          p.text-small(numero="2" titulo="Integridad de entidad") Ninguno de los atributos o columnas que componen una llave primaria debe ser NULO. Es decir, una clave primaria es irreducible para identificar de modo único una fila, el que sea irreducible significa que ningún subconjunto de la clave primaria sirve para identificar inequívocamente la dial: a la fila o tupla. Si se permitiera valor nulo en una columna que hace parte de la llave primaria, esta estaría contradiciendo la irreductibilidad de una llave primaria; esto no aplica para claves alternativas, solo para la clave primaria.
          
          p.text-small(numero="3" titulo="Integridad referencia") Para esto se debe analizar el modelo de la figura 28 y en particular la relación entre las tablas persona y estudiante. Como se sabe, la tabla estudiante tiene una llave primaria que, a la vez, es una referencia de la tabla persona, en la siguiente figura se observa un ejemplo.
    .h4.mt-5 Error de integridad referencial
    figure.mt-4
      img(src="@/assets/template/tema-3-20.png" alt="Texto que describa la imagen")      
    p.mt-4 En la figura 29, por cada estudiante (tabla estudiante) existe uno y solo un elemento en la tabla persona, de tal forma que un estudiante es la conjunción de ambas tablas por medio de la llave foránea (que a la vez es llave primaria) id_estudiante, pero ¿qué tal que no existiera? Eso significa que la base de datos es inconsistente o que tiene datos basura en la tabla estudiante. Afortunadamente los SGDB permiten definir reglas que impidan que esto ocurra en las tablas, es decir que no permita registrar un estudiante con id_estudiante con un valor que no existe en la columna id_persona de la tabla persona. 
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-3-21.svg" alt="Texto que describa la imagen").w-75 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                .h4 Pregunta de análisis de datos 
                p.mt-1 Ahora hay que preguntarse lo siguiente: ¿qué pasaría si se borra el registro de la tabla persona que tiene id_persona con valor tres (3) sufrirá algún problema los datos de la tabla estudiante?, o que pasaría si se cambia el valor de tres (3) en la columna id_persona, por otro valor como por ejemplo nueve (9), antes de continuar, hay que tomarse unos minutos para pensarlo. 
    .row.mt-5
      .col-10.col-md-8.offset-1.offset-md-2.borde-gris
        .row
          .col-2.col-md-3
          .col
            .h4.mt-3 RESPUESTA 
            p.mt-2 La respuesta a las cuestiones planeadas es que en cualquiera de las operaciones de borrado o actualización del dato se incurrirá en una violación de la integridad referencial de la tabla estudiante, ya que no habrá manera de conocer los datos de complementarios del estudiante que se encuentran en la tabla persona. 
            p.mt-3 Para evitar estos problemas de inconsistencia, los sistemas gestores de bases de datos permiten definir unas reglas cuando se borra o actualiza un dato que es referencia foránea de otra tabla. 
    .tabla-a.color-secundario.mt-5 
      table
        thead
          tr
            th Regla de borrado: 
            th Regla de edición: 
        tbody
          tr
            td.p-0
              figure
                img(src="@/assets/template/tema-3-23.png" alt="Texto que describa la imagen")
              p.mt-4.px-5 Define el comportamiento a la pregunta: ¿qué ocurre si se intenta borrar la fila referenciada por la clave foránea de otra tabla? Para lo cual el SGBD implementa una de las siguientes opciones: 
              .row.mt-3.px-5
                  .col-sm.mb-5.mb-sm-0
                    ul.lista-ul.mb-0
                      li.mb-0.d-block
                        .row
                          .col-1.p-0
                            i.fas.fa-angle-right.color-amarillo
                          .col-10.p-0(style='margin-left: -15px; text-align: left;')
                            p.mb-2 Restringir: no se permite borrar la fila referenciada.
                      li.mb-0.d-block.mt-1
                        .row
                          .col-1.p-0
                            i.fas.fa-angle-right.color-amarillo
                          .col-10.p-0(style='margin-left: -15px; text-align: left;')
                            p.mb-2 Cascada: se borra la fila referenciada y también se borran las filas que la referencian mediante la clave foránea en la otra tabla.
                      li.mb-0.d-block.mt-1
                        .row
                          .col-1.p-0
                            i.fas.fa-angle-right.color-amarillo
                          .col-10.p-0(style='margin-left: -15px; text-align: left;')
                            p.mb-2 Poner null: se borra la fila referenciada y las filas que la referenciaban ponen en nulo la clave foránea (solo si acepta nulos).
                      li.mb-0.d-block.mt-1
                        .row
                          .col-1.p-0
                            i.fas.fa-angle-right.color-amarillo
                          .col-10.p-0(style='margin-left: -15px; text-align: left;')
                            p.mb-2 Valor por defecto: se borra la fila referenciada y las filas que la referenciaban ponen en la clave foránea el valor por defecto defina la regla.
            td.p-0
              figure(style="margin-top:-15px;")
                img(src="@/assets/template/tema-3-24.png" alt="Texto que describa la imagen")
              p.mt-4.px-5 Define el comportamiento a la pregunta: ¿qué sucede si se intenta modificar el valor de la clave primaria de la fila referenciada por la clave foránea por otra tabla?
              .row.mt-3.px-5
                  .col-sm.mb-5.mb-sm-0
                    ul.lista-ul.mb-0
                      li.mb-0.d-block
                        .row
                          .col-1.p-0
                            i.fas.fa-angle-right.color-amarillo
                          .col-10.p-0(style='margin-left: -15px; text-align: left;')
                            p.mb-2 Restringir: no se permite editar la fila referenciada.
                      li.mb-0.d-block.mt-1
                        .row
                          .col-1.p-0
                            i.fas.fa-angle-right.color-amarillo
                          .col-10.p-0(style='margin-left: -15px; text-align: left;')
                            p.mb-2 Cascada: se actualiza la fila referenciada y también se actualiza las filas que la referencian mediante la clave foránea en la otra tabla.
                      li.mb-0.d-block.mt-1
                        .row
                          .col-1.p-0
                            i.fas.fa-angle-right.color-amarillo
                          .col-10.p-0(style='margin-left: -15px; text-align: left;')
                            p.mb-2 Poner null: se actualiza la fila referenciada y las filas que la referenciaban ponen a nulo la clave foránea (solo si acepta nulos).
                      li.mb-0.d-block.mt-1
                        .row
                          .col-1.p-0
                            i.fas.fa-angle-right.color-amarillo
                          .col-10.p-0(style='margin-left: -15px; text-align: left;')
                            p.mb-2 Valor por defecto: se edita la fila referenciada y las filas que la referenciaban ponen en la clave foránea el valor por defecto defina la regla
    p.mt-4 De esta forma, una vez definida la estructura del modelo de datos de datos, se debe determinar el comportamiento de estas operaciones, lo cual generalmente responde a requerimiento del sistema de información. 
    .titulo-segundo.mt-5
      #t_3_4.h4 3.4  Lenguajes de los sistemas administradores de bases de datos    
    figure.mt-5
      img(src="@/assets/template/tema-3-25.png" alt="Texto que describa la imagen")
    p.mt-4 Los sistemas gestores de bases de datos emplean un lenguaje que se denomina SQL que corresponde al nombre en inglés (Structured Query Language), Generalmente, cuando un SGBD relacional implementa el lenguaje SQL, todas las acciones, y operaciones se llevan a cabo en el sistema mediante sentencias de este lenguaje. Dentro de SQL hay varios tipos de sentencias que se agrupan en cuatro conjuntos.
    .h4.mt-5.text-center      Conjunto bases de datos SQL
    .col-10.col-md-8.offset-1.offset-md-2.mt-4
      figure
        img(src="@/assets/template/tema-3-26.png" alt="Texto que describa la imagen")
    p.mt-4 Los sistemas gestores de bases de datos emplean un lenguaje que se denomina SQL que corresponde al nombre en inglés (Structured Query Language), Generalmente, cuando un SGBD relacional implementa el lenguaje SQL, todas las acciones, y operaciones se llevan a cabo en el sistema mediante sentencias de este lenguaje. Dentro de SQL hay varios tipos de sentencias que se agrupan en cuatro conjuntos.
    .row.mt-4
      .col-10.offset-1 
        .cajon.color-secundario.bg-secundario-op40.p-4
          .h4 Sentencias de definición de datos (DDL)
          p.mt-1 Son las sentencias que permiten crear tablas, alterar su definición y eliminarlas. En una base de datos relacional existen otros tipos de objetos además de las tablas, como las vistas, los índices y los disparadores. Las sentencias para crear, alterar y eliminar vistas e índices también pertenecen a este conjunto de sentencia se les denomina #[strong DDL] del inglés #[strong D]ata #[strong D]efinition #[strong L]anguage.
          .h5.mt-3 Ejemplo DDL
          p.mt-1 Para crear la tabla persona de la figura 28, quedaría de la siguiente forma: 
    .row.mt-5
      .col-8.col-md-6.py-4.px-5.bg-gris.offset-2.offset-md-3
        p.mb-2 #[strong CREATE TABLE] persona (
        p.mx-5.mb-1 id_persona  #[strong INT NOT NULL ,]
        p.mx-5.mb-1 nombres #[strong VARCHAR(250) NOT NULL ,]
        p.mx-5.mb-1 apellidos #[strong VARCHAR(250) NOT NULL ,]
        p.mx-5.mb-1 correo #[strong VARCHAR(250) NOT NULL ,]
        p.mx-5.mb-1 #[strong PRIMARY KEY] (id_persona)
        p.mb-2 #[strong );]
    p.mt-4 Nota: cada atributo se define en una línea separado por una coma, se agregan restricciones de no nulidad (NOT NULL) al final la sentía termina con punto y coma. Ahora, así se borraría esa misma tabla:
    .row.mt-5
      .col-8.col-md-6.py-4.px-5.bg-gris.offset-2.offset-md-3
        p.mb-2 #[strong DROP TABLE] persona;
    .row.mt-5
      .col-10.offset-1
        .cajon.color-secundario.bg-secundario-op35.p-4
          .h4 Sentencias de manejo de datos (DML) 
          p.m-0 Estas sentencias que permiten insertar datos en las tablas, consultarlos, editarlos y borrarlos, se denomina #[strong DML] del inglés #[strong D]ata #[strong M]anipulation #[strong L]anguage. 
          .h5.mt-3 Ejemplo DML
          p.mt-1 A continuación, se muestra cómo se inserta una fila a la tabla persona, luego cómo se actualiza la fila insertada y posteriormente cómo se borra:
    .row.mt-5
      .col-8.py-4.px-5.bg-gris.offset-2
        p.mb-2 #[strong INSERT INTO] persona (id_persona, nombres, apellidos, correo) 
        p.mb-1  #[strong VALUES] (1, ‘Ana lis’,’Mendez’,’ana@rmail.com’);
    .row.mt-5
      .col-8.py-4.px-5.bg-gris.offset-2
        p.mb-2 #[strong UPDATE] persona #[strong SET] nombres = ‘Ana Lis’ #[strong WHERE] id_persona = 1;
    .row.mt-5
      .col-8.py-4.px-5.bg-gris.offset-2
        p.mb-2 #[strong DELETE]  #[strong FROM] persona #[strong WHERE] id_persona = 1;
    .row.mt-5
      .col-10.offset-1
        .cajon.color-secundario.bg-secundario-op20.p-4
          .h4  Sentencias de control (DCL): 
          p.m-0 Son las sentencias empleadas por los administradores de la base de datos para realizar tareas como, por ejemplo, crear usuarios y concederles o revocar los privilegios. Se usa el término #[strong DCL] del inglés #[strong D]ata #[strong C]ontrol #[strong L]anguage.
          .h5.mt-3 Ejemplo DCL
          p.mt-1 En el ejemplo se le da permisos a un usuario llamado #[strong userdb] de la base de datos de nombre biblioteca_db para que pueda insertar, actualizar, borrar y consultar datos de la tabla persona desde el mismo computador donde está instalada la base de datos (localhost).
    .row.mt-5
      .col-8.py-4.px-5.bg-gris.offset-2
        p.mb-2 #[strong GRANT]  #[strong INSERT,] #[strong UPDATE,] #[strong DELETE,] #[strong SELECT ON] biblioteca_db.persona #[strong TO] userdb@‘localhost’;
    .row.mt-5
      .col-10.offset-1
        .cajon.color-secundario.bg-secundario-op10.p-4
          .h4  Sentencias de control de transacciones (TCL): 
          p.m-0 Un pequeño grupo de sentencias que permiten procesar en bloque operaciones DML garantizando que se efectúen todas y cada una de las operaciones o ninguna. #[strong TCL] del inglés #[strong T]ransaction #[strong C]ontrol #[strong L]anguage.




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
}
</script>

<style lang="sass" scoped></style>

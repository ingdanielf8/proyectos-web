<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Conceptos básicos del sistema
    figure
      img(src="@/assets/template/tema-1-1.png" alt="Texto que describa la imagen")
    p.mt-5 El concepto general de bases de datos según la RAE es el “conjunto de datos organizado de tal modo que permita obtener con rapidez diversos tipos de información” (RAE ,2001). De acuerdo con esta definición, una hoja de cálculo de Excel puede considerarse una base datos, o un conjunto de archivos debidamente organizados, o la lista de nombres y teléfonos que está en nuestros smartphones. En principio, es correcto llamarle base de datos a estos ejemplos, sin embargo, en el contexto de desarrollo de software, se referirá a ese conjunto de información que puede ser almacenada en grandes cantidades de forma organizada y es gestionada desde a través de un #[strong Sistema de Gestión de Bases de Datos] (SGBD).
    p.mt-4 Para organizar y definir la información de forma sistemática, las bases de datos también deben poder almacenar una descripción precisa de los datos que contiene conocida como #[strong metadatos] a los que se le relaciona el tipo de información que conceptualmente guardada (es decir si se agrega una explicación de la naturaleza del dato en la empresa) se da origen a lo que conoce como #[strong diccionario de datos o catálogo de datos].
    .h4.mt-5 Determinar los metadatos del siguiente problema 
    p.mt-4 Una empresa tiene una base datos de llamadas telefónicas que entran y salen de su planta telefónica donde se relacionan los números de teléfonos del llamante y la extensión telefónica que recibe o hace la llamada, la fecha y la hora de la llamada, si fue o no atendida, y la duración de la misma como se muestra en la siguiente figura.
    .h4.mt-5 Base de datos de llamadas telefónica
    .row.mt-5
      .col-6
        figure  
          img(src="@/assets/template/tema-1-2.png" alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p #[strong la figura 1] muestra una tabla de datos que tiene las características de que en cada columna se agrupa un tipo de dato particular, y cada fila es el conjunto de dato que se llama registro y comparten una relación (la relación es que cada fila corresponde a una única llamada telefónica), a esta estructura se le llama bidimensional; aquí filas y columnas son las dos dimensiones. 
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-1-3.svg" alt="Texto que describa la imagen").w-75
    p.mt-5 Los metadatos de la figura anterior serían la definición de cata tipo de dato como se lista a continuación: 
    p.mt-4 #[strong calldate:] tiene la estructura YYYY-MM-DD HH:MI:SS.Z , donde:
    .row
      .col-sm.mb-5.mb-sm-0
        ul.lista-ul
          li.mb-0.d-block
            .row
              .col-1
                i.fas.fa-angle-right.color-azul.text-center
              .col-11.position-absolute.mx-4
                p.mb-2 YYYY sería el año un dato numérico entero de cuatro dígitos.
          li.mb-0.d-block.mt-1
            .row
              .col-1
                i.fas.fa-angle-right.color-azul.text-center
              .col-11.position-absolute.mx-4
                p.mb-2 MM el mes un dato numérico entero de dos dígitos entre 01 y 12.
          li.mb-0.d-block.mt-1
            .row
              .col-1
                i.fas.fa-angle-right.color-azul.text-center
              .col-11.position-absolute.mx-4
                p.mb-2 DD un dato numérico entero de dos dígitos entre 01 y 31
          li.mb-0.d-block.mt-1
            .row
              .col-1
                i.fas.fa-angle-right.color-azul.text-center
              .col-11.position-absolute.mx-4
                p.mb-2 HH un dato numérico de dos dígitos entre 00 y 23.
          li.mb-0.d-block.mt-1
            .row
              .col-1
                i.fas.fa-angle-right.color-azul.text-center
              .col-11.position-absolute.mx-4
                p.mb-2 MI y SS un dato numérico de dos dígitos entre 00 y 59
          li.mb-0.d-block.mt-1
            .row
              .col-1
                i.fas.fa-angle-right.color-azul.text-center
              .col-11.position-absolute.mx-4
                p.mb-2 Z Un dato numérico de un digito (para representar milésimas de segundo).
    p.mt-4 Como este es el conjunto de datos de la primera columna se puede que use un término que describa lo anterior con una sola palabra que es #[strong TIMESTAMP], de esta forma esa primera columna puede quedar correctamente descrita como:
    .row.mt-4
      .col-8.offset-2
        .cajon.color-secundario.p-4
          p.m-0 #[strong calldate TIMESTAM(1)] Donde 1 es el número de dígitos de milisegundos (Z).
    p.mt-5 #[strong src y dst :] empleado para fuente de la llamada o llamante (src) y destino de la llamada (dst) puede ser un número telefónico o de extensión telefónica, algunos tienen el código de país seguido del signo más ejemplo: 57+3155008002.  Por lo tanto, se puede describir como una cadena de texto que no superará los 25 caracteres, pero puede tener menos de 25 caracteres, así  el metadato iría descrito:
    .row.mt-4
      .col-8.offset-2
        .cajon.color-acento-contenido.p-4
          p.m-0 #[strong src VARCHAR(25)] De esta forma decimos que es una cadena de caracteres que
          p.mt-3 #[strong dst VARCHAR(25) ] varía en longitud de 0 a 25 caracteres.
    p.mt-5 #[strong duration:] tiene la estructura HH:MI:SS y como se vio antes representa el tiempo en horas, minutos y segundos:
    .row.mt-4
      .col-8.offset-2
        .cajon.color-secundario.p-4
          p.m-0 #[strong src TIME ] TIME se usa para esta estructura de dato en particular
    p.mt-5 #[strong disposition:] indica si la llamada es atendida ANSWER, no atendida NO ANSWER, o si falló la FAIL. Se puede representar con una cadena de 10 caracteres. 
    p.mt-3 Por lo tanto, la solución de los metadatos de la base de datos de la figura 1 es: 
    .row.mt-5
      .col-6.col-md-4.py-4.px-5.bg-gris
        .h5 calldate TIMESTAM(1),
        .h5 src VARCHAR(25),
        .h5 dst VARCHAR(25),
        .h5 src TIME,
        .h5 disposition VARCHAR(10)
    p.mt-4 Note que cada uno de ellos fue separado por un coma para que se diferencie de los demás.
    .h6 Ejemplo 2 
    p.mt-2 Conociendo el objetivo de la base datos de la figura 1 y los metadatos crear un diccionario de datos o un catálogo de datos.
    .h6.mt-4 Solución:
    .tabla-b.color-acento-contenido.mb-0
      .tabla-b__header.bg-secundario
        h5.mb-0.text-white Diccionario de datos base de llamadas telefónicas
      table
        caption.mt-4 Referencia Tabla - Norma APA
        tr
          th NOMBRE
          td(colspan='3') Base datos de llamadas telefónicas
        tr
          th CREACIÓN
          td(colspan='3') 27/02/2021
        tr
          th DESCRIPCIÓN
          td(colspan='3') Registro de las llamadas telefónicas de la PBX de la empresa STD LTDA.
        tr.bg-secundario.text-white.text-center
          th 
            .h4.mb-0 CAMPO 
          th 
            .h4.mb-0 TIPO DATO
          th 
            .h4.mb-0 TAMAÑO
          th 
            .h4.mb-0 DESCRIPCIÓN

        tr.text-center
          th calldate
          td TIMESTAMP
          td 1
          td Representa el momento exacto en que entra o sale la llamada
        tr.text-center
          th src
          td VARCHAR
          td 25
          td Representa el momento exacto en que entra o sale la llamada
        tr.text-center
          th dst
          td VARCHAR
          td 25
          td Representa el momento exacto en que entra o sale la llamada
        tr.text-center
          th duration
          td TIME
          td 0
          td Representa el momento exacto en que entra o sale la llamada
        tr.text-center
          th disposition
          td VARCHAR
          td 10
          td Representa el momento exacto en que entra o sale la llamada
    p.mt-5 Como se puede notar en la tabla anterior, un diccionario de datos aporta información de la estructura de los datos y el uso que se da a cada dato en la empresa, organización o sistema de información, pero no sin antes darle un nombre a todo el conjunto de datos (primer fila), una fecha (segunda fila) y una descripción (tercera fila) del conjunto de los datos. En la tabla 1 se puede identificar la independencia que existe entre la lógica de los datos (representado por la columna DESCRIPCIÓN del dato) y el almacenamiento físico (estructura de almacenamiento representado por las columnas TIPO DE DATO y TAMAÑO)
    .titulo-segundo.mt-5
      #t_1_1.h4 1.1  Tipos de datos y restricción de no nulidad
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-1-4.svg" alt="Texto que describa la imagen").w-75 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Existen muchos tipos de datos y varían según el SGDB, ya que cada sistema gestor define sus propios tipos de datos, aunque existen las equivalencias notables y otras no tan notables, se observa una tabla que relacione el tipo de datos según los SGDB más comunes del mercado como ORACLE, PostgeSQL, MySQL y SQLServer.. 
    .h4.mt-5 Tipos de datos según bases de datos
    .tabla-a.color-acento-botones.mt-5 
      table
        caption.mt-4 Referencia Tabla - Norma APA
        thead
          tr
            th Tipo de dato
            th ORACLE
            th PostgreSQL
            th MySQL
            th SQLServer
        tbody.text-center
          tr
            td.py-3 Cadena caracteres
            td VARCHAR2
            td CHARACTER VARYING
            td VARCHAR
            td VARCHAR
          tr
            td.py-3 Cadena texto
            td TEXT
            td TEXT
            td TEXT
            td TEXT
          tr
            td.py-3 Entero pequeño
            td SMALLINT
            td SMALLINT
            td SMALLINT
            td SMALLINT
          tr
            td.py-3 Entero
            td INTEGER
            td INTEGER
            td INT
            td INT
          tr
            td.py-3 Fecha
            td DATE
            td DATE
            td DATE
            td DATE
          tr
            td.py-3 Fecha y hora
            td DATE
            td TIMESTAMP WITH TIME ZONE
            td DATETIME
            td DATETIME
          tr
            td.py-3 Hora
            td DATE
            td TIME
            td TIME
            td TIME
          tr
            td.py-3 Entero con decimales
            td FLOAT
            td REAL
            td FLOAT
            td FLOAT
    figure.mt-5
      img(src="@/assets/template/tema-1-5.png" alt="Texto que describa la imagen")
    p.mt-4 Según el tipo de sistema gestor de bases de datos cada uno define sus tipos de datos que, de alguna forma, son muy parecidos entre ellos, o existen equivalencias, las diferencias son pocas y están relacionadas con aspectos técnicos del almacenamiento, se pueden ver más detalles de cada uno de ellos en los sitios oficiales de cada motor de base de datos:
    .tabla-b.color-acento-contenido.mb-0.mt-5
      table
        caption.mt-4 Referencia Tabla - Norma APA
        tr.bg-secundario.text-white
          th 
            .h4.mb-0.text-center Nombre
          td 
            .h4.mb-0.text-center Enlace de acceso
        tr
          th ORACLE
          td https://docs.oracle.com/cd/E11882_01/server.112/e41085/sqlqr06002.htm#SQLQR959
        tr
          th PostgreSQL
          td https://www.postgresql.org/docs/13/datatype.html#DATATYPE-TABLE
        tr
          th MySQL
          td https://dev.mysql.com/doc/refman/8.0/en/data-types.html
        tr
          th SQLServer
          td https://docs.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver15
    p.mt-4 Existen varios tipos de restricciones, por ahora se verán la restricción de longitud, por ejemplo: 
    .row.mt-5
      .col-6.col-md-4.py-4.px-5.bg-gris
        .h5.mb-0 src VARCHAR(25)
    p.mt-5 En él se definen qué es #[strong src], es una columna que no puede exceder los 25 caracteres. De la misma forma, existe una forma de definir que es obligatoria: registrar un dato en esa columna y se llama #[strong restricción de no nulidad], es decir, que ninguna fila puede no pueden tener valor nulo. Así, en el ejemplo de la base de datos de llamadas telefónicas si se define que todo y cada uno de los datos son obligatorios (usando las palabras #[strong NOT NULL]), la metadata que define la estructura de los datos quedaría así:           
    .row.mt-4
      .col-6.col-md-4.py-4.px-5.bg-gris
        .h5 calldate TIMESTAM(1) NOT NULL,
        .h5 src VARCHAR(25)NOT NULL,
        .h5 dst VARCHAR(25)NOT NULL,
        .h5 src TIME NOT NULL,
        .h5.mb-0 disposition VARCHAR(10) NOT NULL
    p.mt-4 Algunos sistemas, para abreviar en la decisión de no nulidad acostumbra usar el acrónimo NN para representar NOT NULL. 
    .titulo-segundo.mt-5
      #t_1_2.h4 1.2  Tipos de bases de datos
    p.mt-4 En las primeras bases de datos empleadas son las de estructura jerárquica. Las relaciones entre registros forman una estructura en árbol, en la actualidad un ejemplo de estas bases datos es la base da tos LDAP usada en la actualidad para sistema de directorio de datos tales como usuario, dispositivos, nombres, contraseñas, direcciones etc. dentro de una red de computadores.
    TabsB.color-secundario.mb-5
      .py-4.py-md-5(titulo="a" :icono="require('@/assets/template/tema-1-6.svg')")
        .row
          .col-12.col-lg-6
            h4 Bases de datos con estructura jerárquica
            p En las primeras bases de datos empleadas son las de estructura jerárquica. Las relaciones entre registros forman una estructura en árbol, en la actualidad un ejemplo de estas bases datos es la base da tos LDAP usada en la actualidad para sistema de directorio de datos tales como usuario, dispositivos, nombres, contraseñas, direcciones etc. dentro de una red de computadores.
          .col-8.col-lg-6.offset-2.offset-lg-0
            figure.mt-5
              img(src="@/assets/template/tema-1-11.png" alt="Texto que describa la imagen")
      .py-4.py-md-5(titulo="b" :icono="require('@/assets/template/tema-1-7.svg')")
        .row
          .col-12.col-lg-6
            h4 Bases de datos con estructura en red
            p Esta estructura es un poco más compleja que la anterior porque contiene otras relaciones de las jerárquicas admitiendo relaciones de cada registro otros, de manera tal que puede seguir distintos caminos para acceder a la información.
          .col-8.col-lg-6.offset-2.offset-lg-0
            figure.mt-5
              img(src="@/assets/template/tema-1-12.png" alt="Texto que describa la imagen")
      .py-4.py-md-5(titulo="c" :icono="require('@/assets/template/tema-1-8.svg')")
        .row
          .col-12.col-lg-6
            h4 Bases de datos con estructura relacional
            p Es estas bases de datos son multipropósito, lo que las hace las más extendidas en la industria y más empleadas, pero son las compleja de aprender; por lo que solo se abordará el diseño e implementación de este tipo de bases de datos. Se basan tablas como las que se presentó en la figura 1 y en la relación de los datos de unas tablas con otras.
          .col-8.col-lg-6.offset-2.offset-lg-0
            figure.mt-5
              img(src="@/assets/template/tema-1-13.png" alt="Texto que describa la imagen")
      .py-4.py-md-5(titulo="d" :icono="require('@/assets/template/tema-1-9.svg')")
        .row
          .col-12.col-lg-6
            h4 Bases de datos con estructura multidimensional
            p Es la extensión de las bases de datos de estructuras relacionales, como se vio en las relacionales, se basan en estructuras bidimensionales (tablas), mientras que la multidimensional en cubos (tres dimensiones), o más complejas con N dimensiones.
          .col-8.col-lg-6.offset-2.offset-lg-0
            figure.mt-5
              img(src="@/assets/template/tema-1-14.png" alt="Texto que describa la imagen")
      .py-4.py-md-5(titulo="e" :icono="require('@/assets/template/tema-1-10.svg')")
        .row
          .col-12.col-lg-6
            h4 Bases de datos con estructura orientada a objeto 
            p Una base de datos orientada a objetos es un sistema de gestión de base de datos mediante el cual representamos la información en forma de objetos que son utilizados en programación orientada a objetos #[strong (Kyocera, 2021)].
          .col-8.col-lg-6.offset-2.offset-lg-0
            figure.mt-5
              img(src="@/assets/template/tema-1-15.png" alt="Texto que describa la imagen")
    p.mt-4 Cada tipo de bases de datos tiene un ámbito de aplicación en el que su desempeño es mejor. Por ejemplo, las bases de datos jerárquicas tienen un mejor desempeño en operaciones de consulta de datos puntuales, mientras que las de datos relacionales son precisas para garantizar la calidad de los datos y la no repetición de los mismos, aunque no muy optimizadas para hacer consultas, y, finalmente, las multidimensionales son muy útiles para análisis estadístico de datos históricos de volúmenes inmensos de datos. Aparte del tipo de datos, existe otro tipo de clasificaciones ya no según la estructura en que se almacenan los datos, sino de acuerdo con la naturaleza de los datos.
    .titulo-segundo.mt-5
      #t_1_3.h4 1.3  Clasificación de bases de datos
    p.mt-4 Según la naturaleza de los datos que se almacenan en la base de datos, se pueden clasificar; la siguiente tabla muestra una compilación de estas clasificaciones.
    .tabla-b.color-acento-contenido.mb-0.mt-5
      table(style="border: solid 1px #e8e8e8;").text-center
        tr.bg-secundario.text-white.text-center
          th 
            .h4.mb-0.text-center Criterio de clasificación
          td 
            .h4.mb-0.text-center Clasificación
          td
            .h4.mb-0.text-center Descripción
        tr(style="background-color: transparent; border: solid 1px #e8e8e8;").text-center
          th(rowspan='2') Según la variabilidad de los datos.
          th Bases de datos estáticas.
          td 
            .row
              .col-sm.mb-5.mb-sm-0
                ul.lista-ul
                  li.mb-0.d-block
                    .row
                      .col-1.p-0
                        i.fas.fa-angle-right.color-azul
                      .col-10.p-0(style='margin-left: -10px; text-align: left;')
                        p.mb-2 Son bases de datos, cuyos datos son históricos, es decir ya no se pueden modificar, se usan comúnmente para estudiar el comportamiento de los datos a través del tiempo.
                  li.mb-0.d-block.mt-1
                    .row
                      .col-1.p-0
                        i.fas.fa-angle-right.color-azul
                      .col-10.p-0(style='margin-left: -10px; text-align: left;')
                        p.mb-2 Generalmente, a este tipo de bases de datos se les llama bodega de datos.
                  li.mb-0.d-block.mt-1
                    .row
                      .col-1.p-0
                        i.fas.fa-angle-right.color-azul
                      .col-10.p-0(style='margin-left: -10px; text-align: left;')
                        p.mb-2 Muchas de estas bases de datos de almacenan en cubos para su análisis se las conoce como OLAP es el acrónimo en inglés de procesamiento analítico en línea (On-Line Analytical Processing).
        tr.text-center
          th Bases de datos dinámicas.
          td 
            .row
              .col-sm.mb-5.mb-sm-0
                ul.lista-ul
                  li.mb-0.d-block
                    .row
                      .col-1.p-0
                        i.fas.fa-angle-right.color-azul
                      .col-10.p-0(style='margin-left: -10px; text-align: left;')
                        p.mb-2 Estos datos se almacenan y pueden ser modificados, agregados, borrados y consultados en cualquier momento, por ejemplo: un sistema de facturación o el sistema Sofiaplus del SENA.
                  li.mb-0.d-block.mt-1
                    .row
                      .col-1.p-0
                        i.fas.fa-angle-right.color-azul
                      .col-10.p-0(style='margin-left: -10px; text-align: left;')
                        p.mb-2 A estos sistemas se les denomina transaccionales, porque cada operación de guardar, borrar o editar se configura como una transacción. OLTP es la sigla en inglés de Procesamiento de Transacciones en Línea (On-Line Transaction Processing).
        tr(style="background-color: transparent; border: solid 1px #e8e8e8;").text-center
          th(rowspan='2') Según el contenido
          th Bases de datos documentales.
          td 
            .row
              .col-sm.mb-5.mb-sm-0
                ul.lista-ul
                  li.mb-0.d-block
                    .row
                      .col-1.p-0
                        i.fas.fa-angle-right.color-azul
                      .col-10.p-0(style='margin-left: -10px; text-align: left;')
                        p.mb-2 Permiten la indexación a texto completo, y en líneas generales realizar búsquedas más potentes.
        tr.text-center
          th Base de datos deductivos.
          td 
            .row
              .col-sm.mb-5.mb-sm-0
                ul.lista-ul
                  li.mb-0.d-block
                    .row
                      .col-1.p-0
                        i.fas.fa-angle-right.color-azul
                      .col-10.p-0(style='margin-left: -10px; text-align: left;')
                        p.mb-2 Un sistema de base de datos deductivos, es un sistema de base de datos, pero con la diferencia de que permite hacer deducciones a través de inferencias. Se basa principalmente en reglas y hechos que son almacenados en la base de datos. También las bases de datos deductivas son llamadas base de datos lógica, a raíz de que se basan en lógica matemática.
    p.mt-4 Pueden existir otras clasificaciones orientadas al ámbito de uso, sin embargo, se presentan las más comunes en el ejercicio del desarrollo de software. La bases de datos relacionales es de obligatorio dominio en cualquiera de los casos, ya que los conceptos de esta son reutilizables en casi todos los otros tipos.
    .titulo-segundo.mt-5
      #t_1_4.h4 1.4  Sistema de gestión de bases de datos    
    figure.mt-4
      img(src="@/assets/template/tema-1-16.png" alt="Texto que describa la imagen")
    p.mt-4.mb-0 Un sistema de gestión de la base de datos es un programa de computador que permite definir, crear y mantener los datos de una base de datos, controlando el acceso. 
    p Los servicios SGDB:
    .row
      .col-sm.mb-5.mb-sm-0
        ul.lista-ul
          li.mb-0.d-block
            .row
              .col-1.p-0
                i.fas.fa-angle-right.color-azul
              .col-11.p-0(style='margin-left: -70px; text-align: left;')
                p.mb-2 Permiten la definición de la base de datos usando un lenguaje de definición de datos.
          li.mb-0.d-block.mt-1
            .row
              .col-1.p-0
                i.fas.fa-angle-right.color-azul
              .col-11.p-0(style='margin-left: -70px; text-align: left;')
                p.mb-2 Permiten la inserción, actualización, eliminación y consulta de datos usando un lenguaje de manejo de datos.
          li.mb-0.d-block.mt-1
            .row
              .col-1.p-0
                i.fas.fa-angle-right.color-azul
              .col-11.p-0(style='margin-left: -70px; text-align: left;')
                p.mb-2 Proporcionan un acceso controlado a la base de dato (con autenticación, roles, niveles de acceso).
          li.mb-0.d-block.mt-1
            .row
              .col-1.p-0
                i.fas.fa-angle-right.color-azul
              .col-11.p-0(style='margin-left: -70px; text-align: left;')
                p.mb-2 Concurrencia (varios usuarios a la vez accediendo o manipulando los datos) y multitarea.
          li.mb-0.d-block.mt-1
            .row
              .col-1.p-0
                i.fas.fa-angle-right.color-azul
              .col-11.p-0(style='margin-left: -70px; text-align: left;')
                p.mb-2 Algunos SGDB permiten administrar le catálogo de datos. 
    p.mt-4 Los SGBD son una herramienta muy útil; sin embargo, se podría decir que los SGBD son un poco más complejos, ya que los usuarios ven más datos y sus relaciones de los que realmente se necesitan. 


</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>

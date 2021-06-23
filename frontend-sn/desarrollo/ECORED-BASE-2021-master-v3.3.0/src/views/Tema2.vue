<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.mb-5
      .titulo-principal__numero
        span 2
      h1 	Modelo entidad relación
    .row.mt-5
      .col-12.col-lg-10.align-self-center
        p Una base de datos se puede percibir como un “almacén” de información que se define y se crea una sola vez para guardar grandes cantidades de datos de forma organizada (o estructurada), con el fin de poder encontrarla y utilizarla fácilmente. Se presentará el concepto y características de las bases de datos actuales, teniendo en cuenta que cada base de datos es diseñada para cumplir con los requisitos de información de una organización o una empresa. Estos diseños están concebidos para emplear Sistemas de Gestión de Bases de Datos (en adelante SGDB), que es un sistema o servicio informático que permite a las personas definir, crear, dar soporte y mantenimiento a las bases de datos, controlando el acceso de forma segura.
      .col-2.d-none.d-md-block
        figure
          img(src="@/assets/template/tema-2-1.svg" alt="Texto que describa la imagen")
    .row.mt-4
      .col-8.offset-2
        .cajon.color-secundario.p-4
          .h4 a. Entidad
          p.m-0 El modelo de datos entidad-relación (E-R) está basado en una percepción del mundo real que consta de una colección de objetos básicos, llamados entidades, y de las relaciones entre estos objetos. Una entidad es una «cosa» u «objeto» en el mundo real que es distinguible de otros objetos. Por ejemplo, cada persona es una entidad, y las #[strong cuentas] bancarias pueden ser consideradas entidades (Henry, 2002) y se representa con un rectángulo.
    .row.mt-4
      .col-8.offset-2
        .cajon.color-secundario.bg-secundario-op35.p-4
          .h4 b. Atributos 
          p.m-0 Las entidades están descritas por un conjunto de atributos, por ejemplo, una persona puede tener estos atributos: #[strong nombres, apellidos, edad, documento de identidad (identificación)]; o la cuenta bancaria puede tener los siguientes atributos: #[strong número de cuenta, saldo, fecha de creación]; se representan con una elipse.
    .row.mt-4
      .col-8.offset-2 
        .cajon.color-secundario.bg-secundario-op25.p-4
          .h4 c. Relaciones
          p.m-0 Una relación es una asociación entre varias entidades. Por ejemplo, una relación #[strong titular] asocia un cliente con cada cuenta que tiene (de la que es titular). Se verá más claro en un diagrama, pero antes se deben considerar los siguientes elementos y se representa con un rombo.
    .row.mt-5
      .col-sm.mb-5.mb-sm-0
        ul.lista-ul
          li.mb-0.d-block
            .row
              .col-1.p-0
                i.fas.fa-angle-right.color-azul
              .col-11.p-0(style='margin-left: -70px; text-align: left;')
                p.mb-2 Rectángulos, que representan conjuntos de entidades.
          li.mb-0.d-block.mt-1
            .row
              .col-1.p-0
                i.fas.fa-angle-right.color-azul
              .col-11.p-0(style='margin-left: -70px; text-align: left;')
                p.mb-2 Elipses, que representan atributos.
          li.mb-0.d-block.mt-1
            .row
              .col-1.p-0
                i.fas.fa-angle-right.color-azul
              .col-11.p-0(style='margin-left: -70px; text-align: left;')
                p.mb-2 Rombos, que representan relaciones entre conjuntos de entidades.
          li.mb-0.d-block.mt-1
            .row
              .col-1.p-0
                i.fas.fa-angle-right.color-azul
              .col-11.p-0(style='margin-left: -70px; text-align: left;')
                p.mb-2 Líneas, que unen los atributos con los conjuntos de entidades y los conjuntos de entidades con las relaciones.
    .h4.mt-5 Entidad relación persona cuenta bancaria
    figure.mt-5
      img(src="@/assets/template/tema-2-2.png" alt="Texto que describa la imagen")
    p.mt-5 Para una base de datos de un sistema bancario consistente en clientes (es decir personas) y sus cuentas bancarias, en la figura 7 se muestra el diagrama Entidad Relación correspondiente. En él se indica que hay dos entidades que son persona y cuenta, con los atributos descritos anteriormente para cada una. El diagrama también representa la relación titular entre persona y cuenta.
    p.mt-3 Se debe tener en cuenta que el mode  lo relacional convierte las entidades en tablas, por lo tanto, se puede poner como ejemplo que las entidades personas se conviertan en tablas como muestra la siguiente figura
    .h4.mt-5 Tablas de una entidad relación
    figure.mt-5
      img(src="@/assets/template/tema-2-3.png" alt="Texto que describa la imagen")
    .row.mt-4
      .col-8.offset-2 
        .cajon.color-secundario.bg-secundario-op10.p-4
          .h4 d. Tupla
          p.m-0 Las tablas de la figura 8 muestran cada un conjunto de registros, la “tabla persona” muestra 6 registros y la “tabla cuenta” muestra 9 de ellas, cada uno de estos registros representa un objeto, es decir, de la tabla persona hay 6 (objetos) o personas, a la agrupación de los datos de cada registro se le llama TUPLA y, en términos sencillos, una TUPLA de una base datos es el conjunto de todos los atributos (columnas) de una fila.
    .titulo-segundo.mt-5
      #t_2_1.h4 2.1  Relaciones entre entidades
    p.mt-4 Como se observa en las figuras 7 y 8, una entidad se puede representar con una tabla, sin embargo, la relación #[strong titular] aún no se sabe cómo representarla y para ello se debe definir algunas propiedades de los atributos. 
    .row.mt-4
      .col-8.offset-2 
        .cajon.color-acento-botones.bg-acento-botones-op40.p-4
          .row
            .col-3.d-none.d-lg-block
              figure.mt-5
                img(src="@/assets/template/tema-2-4.svg" alt="Texto que describa la imagen").w-75
            .col-12.col-lg-9
              .h4 Principio de unicidad: 
              p.mt-3 En una tabla nunca deben existir TUPLAS repetidas, es decir, no debe haber más de una fila con exactamente los mismos valores en cada columna que otra fila de la misma tabla. En otras palabras, cada fila debe diferir al menos en un elemento (columna) en relación con las demás.
    p.mt-4 En una base de datos relacional, las relaciones permiten evitar datos redundantes. En el ejemplo anterior una persona pudiera tener varias cuentas bancarias, pero no es deseable que, por cada una de las cuentas bancarias asociadas a la misma persona, se deban repetir lo datos de la misma persona, sino, más bien, que se debe encontrar un mecanismo para relacionar la información de las dos tablas; y para ello se introducen algunos conceptos útiles.  
    .h4.mt-5 Claves
    p.mt-4 Dado que en una tabla no hay filas repetidas, se pueden distinguir unas de otras, es decir, se pueden identificar de manera única (por el principio de unidad). Por lo tanto, la manera de identificarlas inequívocamente es según los valores de los atributos. De esta forma, se conoce como claves a los atributos que sirven para identificar un registro de forma inequívoca.
    .h4.mt-5 Ejemplo: 
    p.mt-4 En la tabla persona de la figura 5, es sabido por todos que no existen dos personas con el mismo número de documento de identidad, por lo tanto, se puede emplear el atributo #[strong identificación] como clave de la tabla persona.  Así mismo, no deben existir dos cuentas bancarias con el mismo número de cuenta, entonces, el atributo #[strong numero_cuenta] se puede emplear como clave de la tabla cuenta. Esto se puede presentar en un diagrama de entidad relación cuando a los atributos que componen una clave se les marca con subrayado el nombre del atributo tal como se muestra en la siguiente figura
    .h4.mt-5 Claves de las entidades persona y cuenta
    figure.mt-5
      img(src="@/assets/template/tema-2-5.png" alt="Texto que describa la imagen")
    p.mt-4 Nótese como los atributos #[strong identificacion] y #[strong numero_cuenta] tiene subrayada la palabra identificadora del atributo, representado así que ese atributo es la clave (que hace que se cumpla el criterio de unicidad) de su entidad.
    .h4.mt-5 Claves candidata, superclave y clave primaria 
    p.mt-4 Se supone el caso ahora que el banco es internacional, que es un banco moderno y solo diseñado para transacciones vía internet o virtuales, por lo tanto, el correo del cliente (persona) es necesario y obligatorio.
    p.mt-3 En este caso ocurren un par de asuntos a analizar: al ser internacional el banco, puede existir un cliente en un país con el mismo número de identificación de otro cliente en otro país, por lo tanto, el atributo #[strong identificación] ya no puede ser una clave de la entidad, sin embargo, es importante y obligatorio saber a qué país corresponde cada cliente, el conjunto de datos #[strong identificación y país] y si ambos cumplen con el criterio de unidad, porque no existen dos personas en el mismo país con el mismo número de identificación.
    .h4.mt-5 Clave compuesta
    p.mt-4 Si se escogiera el conjunto de atributos #[strong identificación y país] como clave de la entidad, se está haciendo una clave compuesta porque es un conjunto de más de un atributo el que se usa para este fin.
    p.mt-3 El otro asunto a considerar es que se puede emplear el #[stron correo] electrónico como clave ya que no existen dos usuarios con el mismo #[strong correo] electrónico, esto es válido si se definió como regla del banco que cada cliente tenga su correo electrónico diferente de los demás, estos dos casos se representan en la siguiente figura.
    .h4.mt-5 Claves candidatas
    figure.mt-5
      img(src="@/assets/template/tema-2-6.png" alt="Texto que describa la imagen")
    .h4.mt-5 Clave candidata
    p.mt-4 Los dos caminos propuestos en la figura 10 son válidos, y se denominan claves candidatas porque con ambas se puede lograr el principio de unicidad, y es potestad de cada diseñador o analista de sistemas determinar cuál de las dos emplear.
    p.mt-3 Sin embargo, existe otro tipo de solución y es asignarle un atributo identificador, a la entidad persona que se encargue exclusivamente de identificar inequívocamente cada tupla o fila, a este atributo se le puede llamar #[strong id_persona] que sería un número que el programa o software para el que se está desarrollando la base y le asignará a cada cliente, cada vez que se registre por primera vez, los datos de una persona (generalmente una secuencia). De esta forma, se tendrían 3 claves candidatas; la figura 11 muestra cómo sería la entidad y la tabla que representa. 
    .h4.mt-5 Claves candidatas secuencia
    .row.mt-5
      .col-10.col-md-8.col-lg-6.offset-1.offset-md-2.offset-md-3
        figure
          img(src="@/assets/template/tema-2-7.png" alt="Texto que describa la imagen")
    .h4.mt-5 Entidad persona
    figure
      img(src="@/assets/template/tema-2-8.png" alt="Texto que describa la imagen")
    p.mt-4 Este último enfoque es el más empleado y recomendado por los diseñadores o analistas de software, pues reduce, significativamente, la complejidad del diseño y facilita la relación con otras tablas o entidades. Por lo tanto, se usará cada vez que se tenga oportunidad de hacerlo.
    .h4.mt-5 Superclave
    p.mt-4 Es un conjunto de uno o más atributos que, tomados juntos, permiten identificar de forma única una entidad en el conjunto de entidades. Por ejemplo, el atributo #[strong id_persona] del conjunto de entidades persona es suficiente para distinguir una persona cliente del banco de las otras. Así, #[strong id_pesona] es una superclave. Análogamente, la combinación de #[strong identificación y país] es una superclave del conjunto de entidades persona. El atributo correo de persona es otra superclave, pero el atributo #[strong nombres] no lo es porque varias personas podrían tener el mismo nombre.
    .h4.mt-5 Clave primaria
    p.mt-4 Se emplea el término clave primaria para nombrar una clave candidata que es elegida por el diseñador o analista de la base de datos como clave principal para identificar las tuplas dentro de una entidad. Una clave (primaria, candidata y superclave) es una propiedad del conjunto de entidades, más que de las entidades individuales. Entre dos tuplas individuales en el conjunto no pueden tener el mismo valor en sus atributos clave primaria al mismo tiempo. La designación de una clave primaria es en sí una restricción que modela una característica del mundo real.
    .titulo-segundo.mt-5
      #t_2_2.h4 2.2  Relaciones de uno a muchos    
    p.mt-4 Una relación de uno a varios o de uno a muchos es el tipo de relación más empleada. En este tipo de relación, una fila de la tabla A puede tener muchas filas coincidentes en la tabla B. Pero una fila de la tabla B solo puede tener una fila coincidente en la tabla A. Por ejemplo, las tablas #[strong persona y cuenta] tienen una relación de uno a muchos. Es decir, cada persona puede tener más de una cuenta, pero, por ejemplo, cada título proviene de una sola editorial.
    p.mt-3 En un diagrama de entidad relación esto se representa con lo que se denomina multiplicidad como se muestra en la siguiente figura. 
    .h4.mt-5 Relaciones de uno a muchos
    figure
      img(src="@/assets/template/tema-2-9.png" alt="Texto que describa la imagen")
    p.mt-4 A esta representación se le denomina multiplicidad #[strong 1:N] y se lee de la siguiente forma:  #[strong UNA persona ]es titular de #[strong N cuentas] bancarias, de esta forma una persona puede tener N (que puede ser cero, uno o más de una) cuentas bancarias. Se puede leer en forma inversa que el resultado es el mismo: muchas o varias cuentas bancarias pueden tener un mismo titular. 
    p.mt-3 Cuando una relación de es uno a muchos y se mapea una un modelo de base de datos relacional, la relación #[strong titular] (rombo) se termina convirtiendo una columna de la tabla de los muchos.
    .h4.mt-5 Tablas de un modelo relacional 1:N
    figure
      img(src="@/assets/template/tema-2-10.png" alt="Texto que describa la imagen")
    p.mt-4 Como se puede ver en la figura 13, Ana Lis Méndez, es titular de dos cuentas bancarias (67.789.901 y 32.443.171), y todos los datos de la columna titular en la tabla cuenta se conoce como #[strong LLAVE FORANEA] de la tabla persona; de esta forma se puede concluir.
    .row.mt-4
      .col-8.offset-2 
        .cajon.color-secundario.bg-secundario-op10.p-4
          .h4 REGLA DE MAPEO 1:N de Modelo entidad-relación a modelo relacional: 
          p.m-0 Una relación de uno a mucho (1:N) se transforma en una columna en la tabla que tiene la multiplicidad de los muchos (cuenta). Y todos los datos de esta columna existen como llave primaria en la tabla que tiene la multiplicidad uno (tabla persona).
    p.mt-4 Existe otro tipo de diagrama y que es más empleado a la hora de diseñar una base datos, este diagrama se llama “Diagrama relacional”, donde las entidades se presentan como tablas de una vez y las relaciones son más claras. A continuación, se observa la representación del diagrama entidad relación de la figura a un diagrama relacional. 
    .h4.mt-5 Diagrama relacional 1:N
    .row.mt-4
      .col-8.col-lg-6.offset-2.offset-lg-0
        figure
          img(src="@/assets/template/tema-2-11.png" alt="Texto que describa la imagen")
      .col-12.col-lg-6.mt-3.mt-lg-0
        p En la figura 14 se puede ver el nombre de las entidades (persona y cuenta), los atributos haciendo especial énfasis en los que representan la llave primaria con el indicador #[strong PK] (del inglés Primary #[strong K]ey), y también se observa la relación titular (columna de la tabla), indicando que es una clave o llave foránea de la tabla persona lo indica con el indicador #[strong FK] (del inglés #[strong F]oreign #[strong K]ey).
        p.mt-3 Algunos diagramas relacionales agregan metadatos para hacer más claro el modelo al diseñador, así como la naturaleza de los datos del modelo.
    .h4.mt-5.text-center Diagrama relacional 1:N con metadatos
    .row.mt-5
      .col-10.col-md-8.col-lg-6.offset-1.offset-md-2.offset-md-3
        figure
          img(src="@/assets/template/tema-2-12.png" alt="Texto que describa la imagen")
    .row.mt-4
      .col-8.offset-2 
        .cajon.color-acento-botones.bg-acento-botones-op50.p-4
          .h4 Conclusión:
          p.mt-2 La relación de uno a muchos se termina convirtiendo en una columna en la tabla que tiene la multiplicidad de los muchos. 
    .titulo-segundo.mt-5
      #t_2_3.h4 2.3  Relaciones de uno a muchos
    p.mt-4 En una relación de muchos a muchos, una fila de la tabla A puede tener relación con muchas filas en la tabla B y también, en sentido contrario, una fila de la tabla B con respecto de varias filas de la tabla A. Esta relación se crea definiendo una tercera tabla denominada tabla de relación. Esta nueva tabla tiene una clave principal de la tabla compuesta de las claves foráneas de la tabla A y de la B
    .h4.mt-5 Ejemplo:
    p.mt-4 Se necesita almacenar la información de unas referencias bibliográficas o publicaciones de libros, tesis, artículos que escriben los estudiantes de una universidad, y como se sabe un libro, tesis, artículo o cualquier publicación puede ser elaborada por más de una persona, y a su vez, una persona (docente, estudiante o investigador) puede tener más de una publicación de su autoría. 
    .h4.mt-5 Relaciones de uno a muchos
    figure.mt-4
      img(src="@/assets/template/tema-2-13.png" alt="Texto que describa la imagen")
    p.mt-4 Como se observa en la figura 16, la entidad publicación tiene una llave primaria llamada identificación, y existe una relaciona llamada #[strong autor], y representa que unas persona pueden ser autor de una o muchas publicaciones, y que una publicación puede ser de autoría de una o muchas personas, la multiplicidad en este caso es de muchos a muchos y se representa como N:N.
    .row.mt-5
      .col-8.offset-2 
        .cajon.color-secundario.bg-secundario-op10.p-4
          .h4 REGLA DE MAPEO N:N de Modelo entidad-relación a modelo relacional
          p.m-0 En una relación de uno a mucho (N:N) se transforma en una tabla cuya llave primaria está compuesta por las llaves primarias de las otras dos tablas.
    p.mt-4 Como se puede ver en la figura 17, la “tabla autor”, dice que la persona Ana Lis, es autora de los libros de título Grandes hazañas y Pellentesque, también que el libro Pellentesque es escrito además de Ana Lis por Luis Darío y Jose Nicolás. Lo anterior haciendo referencia a las llaves primarias de las tablas a) #[strong persona] y b) #[strong publicación]. 
    .h4.mt-5 Diagrama relacional 1:N
    figure.mt-4
      img(src="@/assets/template/tema-2-14.png" alt="Texto que describa la imagen")
    p.mt-4 La representación de la relación N:N con un diagrama relacional se muestra en la figura 18. Donde se usan los prefijos #[strong FK]1 y #[strong FK]2, para indicar llave foránea uno y dos, para las entidades persona y publicación 2, respectivamente.  También se puede ver el prefijo #[strong UK] (#[strong U]nique #[strong K]ey) en la tabla publicación, en la columna ISBN, el cual significa que en toda la tabla publicación no puede existir más de una fila con el mismo ISBN es decir, nunca ninguna publicación tendrá el mismo ISBN que otra. 
    .h4.mt-5.text-center Diagrama relacional N:N
    .row.mt-5
      .col-10.col-md-8.col-lg-6.offset-1.offset-md-2.offset-md-3
        figure
          img(src="@/assets/template/tema-2-15.png" alt="Texto que describa la imagen")
    .titulo-segundo.mt-5
      #t_2_4.h4 2.4  Relaciones de uno a uno
    p.mt-5 En una relación uno a uno, una fila de la tabla A solo puede tener una fila coincidente en la tabla B y viceversa. Se crea, entonces, una relación uno a uno si ambas columnas relacionadas son claves principales o tienen restricciones únicas.  Este tipo de relación no es común porque la mayoría de la información que está relacionada de esta manera estaría en una tabla; se puede usar una relación uno a uno por alguno de estos motivos:
    .row.mt-5
      .col-sm.mb-5.mb-sm-0
        ul.lista-ul
          li.mb-0.d-block
            .row
              .col-1.p-0
                i.fas.fa-angle-right.color-azul
              .col-11.p-0(style='margin-left: -70px; text-align: left;')
                p.mb-2 Dividir una tabla con muchas columnas.
          li.mb-0.d-block.mt-1
            .row
              .col-1.p-0
                i.fas.fa-angle-right.color-azul
              .col-11.p-0(style='margin-left: -70px; text-align: left;')
                p.mb-2 Aislar parte de una tabla por motivos de seguridad.
          li.mb-0.d-block.mt-1
            .row
              .col-1.p-0
                i.fas.fa-angle-right.color-azul
              .col-11.p-0(style='margin-left: -70px; text-align: left;')
                p.mb-2 Almacenar datos de corta duración y que podrían eliminarse fácilmente borrando la tabla periódicamente.
          li.mb-0.d-block.mt-1
            .row
              .col-1.p-0
                i.fas.fa-angle-right.color-azul
              .col-11.p-0(style='margin-left: -70px; text-align: left;')
                p.mb-2 Almacenar información que solo se aplique a un subconjunto de la tabla principal.
    p.mt-4 Volviendo al ejemplo del banco, esta vez se supone que la empresa necesita información sobre sus empleados lo que, a la vez, pueden ser clientes del banco.
    .h4.mt-5 Relaciones de uno a muchos
    figure
      img(src="@/assets/template/tema-2-16.png" alt="Texto que describa la imagen")
    .row.mt-4
      .col-8.offset-2 
        .cajon.color-acento-botones.bg-acento-botones-op50.p-4
          .h4 REGLA DE MAPEO 1:1 de Modelo entidad-relación a modelo relacional
          p.mt-2 En el momento de convertir la relación o con multiplicidad 1:1 a tablas la relación uno a uno se convierte en una columna de la tabla empleado con restricción de unicidad (Unique Key o Primary Key) como se muestra en el siguiente diagrama relacional. 
    .h4.mt-5 Diagrama relacional 1:1
    .row.mt-4
      .col-8.col-lg-4.offset-2.offset-lg-0
        figure
          img(src="@/assets/template/tema-2-17.png" alt="Texto que describa la imagen")
      .col-12.col-lg-8.mt-3.mt-lg-0.align-self-center
        p Como se puede inferir de la figura 20, se crea una tabla donde se relacionan los datos de las personas que son empleados del banco, a través de una columna que se llama #[strong id_persona], pero es común entre algunos diseñadores ponerle el nombre que lo relaciones con la tabla a la que perteneces es decir #[strong id_empleado], pero esto queda al criterio del diseñador. 
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [],
  }),
}
</script>

<style lang="sass" scoped></style>

import * as React from "react";
import "../assets/styles/Footer.scss";
import { Container } from "react-bootstrap";
import "../assets/styles/About.scss";


const Info = () => {
      return (
    <React.Fragment>
        <Container>
            <div className="about-content">
                <div className="about-content-text">
                    {/* <h1>Sobre Nosotros</h1> */}
                 
                    <h2>¿Por qué es importante sembrar un árbol y mejor aún si es especie nativa?</h2>
                    
                    <p>
                    En medio de la situación actual las reflexiones son muchas. Una de ellas, la cual considero muy importante, es el estado actual de nuestro planeta. Pero aún más importante para mí es lo que podemos hacer.
                    </p>
                    
                    <p>
                    Una de las sugerencias que hemos venido escuchando por muchos años es que debemos sembrar árboles y para esta columna me gustaría contarles por qué es importante. En mi caso, cuando he visto publicidad con respecto a esta actividad, siempre se refiere a su valor en términos de producción de oxígeno, resultante del proceso de fotosíntesis. Como sabemos, esta molécula es fundamental para la existencia de todos los animales, incluyéndonos.
                    </p>
                    <p>
                    Sin embargo, para este punto debo hacer una aclaración, sin el objetivo de desanimar: los árboles sí producen oxígeno, por supuesto, pero no son los mayores productores de él en el mundo ¿Se les ocurre en este momento algún otro organismo que tenga este papel? Las plantas producen aproximadamente el 28% de este gas en la Tierra, pero es el fitoplancton, organismo autótrofo (que se nutre de su propia materia orgánica) que habita en el mar, el que más aporta, liberando entre el 50% al 85% de dicha sustancia en el planeta.
                    </p>
                    <p>
                    Como dije anteriormente, que esto no lo desanime. Que los árboles no sean los mayores productores de oxígeno no quiere decir que no sea fundamental el porcentaje que generan para todos los organismos que requerimos de esta molécula para nuestra existencia. Esta aclaración la hago incluso con el objetivo de que no nos quedemos con este único argumento para decidir sembrarlos.
                    </p>
                        <img src="https://www.javeriana.edu.co/pesquisa/wp-content/uploads/2020/11/sembrar-arboles-especies-nativas.jpg" alt="" />
                    <p>
                    Ellos son muy importantes por esta y otras razones: la generación de sombra, la regulación bioclimática debido a que absorbe el agua por sus raíces y la devuelve al ecosistema en forma de vapor a través del proceso llamado evapotranspiración, favoreciendo la humedad. Esto contribuye también a la regulación de las temperaturas. Además, canalizan los vientos y enfrían los ambientes de forma pasiva.
                    </p>

                    <p>
                    Así mismo, los árboles aumentan la fertilidad de los suelos, debido a que la cantidad de materia orgánica se incrementa. Gracias a sus raíces, disminuye la erosión que generan el agua y el viento, reteniendo la tierra y evitando, por ejemplo, los deslizamientos. Con respecto al agua, cumplen un papel fundamental, pues mejoran la infiltración y retención de esta, permitiendo que lleguen a acuíferos subterráneos.
                    </p>
                    <p>
                    En cuanto a su relación con otros organismos: son usados como alimento por innumerables seres vivos; son el hábitat de animales y de otras plantas; son parte fundamental tanto de la alimentación humana como de nuestra cultura pues se utilizan con fines ornamentales, medicinales, de construcción, obtención de combustibles y fibras. Los árboles se relacionan con el embellecimiento de espacios urbanos y con el bienestar físico y psicológico de los individuos. Estos son solo algunos beneficios.
                    </p>
                    <p>
                    No puedo dejar de referirme a su importancia en cuanto a la captación de dióxido de carbono o CO2, el cual integra a su biomasa (tallos, hojas, ramas y raíces), siendo este compuesto un Gas de Efecto Invernadero (GEI) producido en enormes cantidades diariamente, el cual proviene, en su mayoría, de múltiples actividades humanas.
                    </p>
                    <p>
                    Para terminar de responder el interrogante planteado en el título de esta columna, es importante que si usted toma la decisión de sembrar un árbol, tenga en cuenta entre sus opciones especies nativas de la región geográfica donde se encuentra, es decir, que crezcan naturalmente en ese lugar. Estas variedades vegetales llevan miles de años adaptándose tanto a condiciones físicas como químicas del lugar donde usted vive, por lo tanto, interactúan con animales y vegetales propios de su zona; además son polinizadas por seres propios de esos sitios y hacen parte de sus cadenas tróficas. Tenga en cuenta algunos árboles nativos de Colombia que puede sembrar: cedro, guayacán trébol, encenillo, entre otros, que dejo en este enlace para que usted consulte.
                    </p>
                    <p>
                    Después de leer este escrito, espero que se anime a sembrar un árbol y cuando le pregunten por qué lo hace, piense en varias de las razones que le describo aquí. Invite a sus amigos y familiares a plantarlos y, por último, tenga como alternativa uno nativo de su región. Cuando la planta crezca, usted podrá observarla haciendo parte de uno de los miles de hermosos paisajes que tiene nuestro país, Colombia.
                    </p>
                </div>
            </div>
        </Container>
    </React.Fragment>
  );
}

export default Info;
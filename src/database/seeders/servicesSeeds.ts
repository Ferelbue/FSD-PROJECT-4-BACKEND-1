import { Service } from "../../models/Service";
import { AppDataSource } from "../db";

export const serviceSeedDatabase = async () => {
    try {
        await AppDataSource.initialize();

        const service = Service.create({
            serviceName: "Tribal",
            description: "Inspirado en las tradiciones de las culturas indígenas de todo el mundo, el estilo tribal se centra en patrones geométricos, líneas negras gruesas y motivos abstractos. Los diseños tribales pueden ser tanto simples como intrincados, y a menudo tienen un significado simbólico o cultural."
        })
        await service.save();

        const service2 = Service.create({
            serviceName: "Tatuaje tradicional",
            description: "Esta técnica se basa en los estilos de tatuaje tradicionales que se desarrollaron en Occidente a principios del siglo XX. Caracterizado por líneas gruesas y negras, colores brillantes y motivos clásicos como corazones, anclas y rosas."
        })
        await service2.save();

        const service3 = Service.create({
            serviceName: "Acuarella",
            description: "Este estilo se inspira en la pintura al agua, utilizando colores vibrantes y difuminados para crear efectos similares a los de una acuarela. Los tatuajes de acuarela a menudo carecen de contornos definidos y tienen un aspecto más orgánico y fluido."
        })
        await service3.save();

        const service4 = Service.create({
            serviceName: "Dotwork",
            description: "Esta técnica utiliza miles de pequeños puntos para crear formas y sombreados. Los tatuajes de puntillismo pueden tener un aspecto muy detallado y texturizado, y a menudo se combinan con otros estilos como el realismo o el geométrico."
        })
        await service4.save();

        const service5 = Service.create({
            serviceName: "Geométrico",
            description: "Caracterizado por patrones geométricos y simétricos, este estilo utiliza líneas rectas y formas geométricas para crear diseños abstractos y estilizados."
        })
        await service5.save();

        const service6 = Service.create({
            serviceName: "Fine Line",
            description: "La técnica de línea fina implica el uso de agujas de tatuaje muy delgadas para crear líneas precisas y detalladas en el diseño. Esta técnica se utiliza comúnmente en tatuajes delicados, geométricos o minimalistas, así como en tatuajes finos y elegantes de estilo artístico"
        })
        await service6.save();

        const service7 = Service.create({
            serviceName: "Realism",
            description: "El realismo en el tatuaje se centra en recrear imágenes que se asemejen a fotografías o representaciones de la realidad. Los tatuajes realistas requieren una habilidad técnica excepcional para capturar detalles precisos, sombras y texturas, y pueden representar retratos, paisajes o imágenes de objetos con un alto grado de precisión."
        })
        await service6.save();

        const service8 = Service.create({
            serviceName: "Blackwork",
            description: "El realismo en el tatuaje se centra en recrear imágenes que se asemejen a fotografías o representaciones de la realidad. Los tatuajes realistas requieren una habilidad técnica excepcional para capturar detalles precisos, sombras y texturas, y pueden representar retratos, paisajes o imágenes de objetos con un alto grado de precisión."
        })
        await service8.save();

        const service9 = Service.create({
            serviceName: "Trash Polka",
            description: "Trash Polka es un estilo de tatuaje originario de Alemania que combina elementos de realismo, tipografía, manchas de tinta y collage. Los tatuajes Trash Polka suelen ser audaces y llamativos, con imágenes contrastantes y texturas mezcladas para crear una apariencia visual única y expresiva."
        })
        await service9.save();

        const service10 = Service.create({
            serviceName: "Shading",
            description: "Es una técnica que implica el uso de diferentes densidades y ángulos de líneas para crear gradaciones suaves de color y tono en el diseño del tatuaje. Se utiliza para agregar profundidad, textura y realismo a los tatuajes. Los artistas de tatuajes expertos pueden utilizar diferentes tipos de agujas y configuraciones de máquinas para lograr efectos dependiendo del estilo y la preferencia del cliente."
        })
        await service10.save();

        console.log("---------------------------------------")
        console.log("++++++++ SERVICIOS CREADOS (10) +++++++")
        console.log("---------------------------------------")

    } catch (error) {
        console.log(error);

    } finally {
        await AppDataSource.destroy()
    }
}


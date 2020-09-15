//async para ter a função await
module.exports = async function(db, {proffyValue, classValue, classScheduleValues}){
    //inserir dados na tabela de teachers

    //await usado para carregar os dados, e aí depois de pronto passar pra próxima linha
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            ${proffyValue.name},
            ${proffyValue.avatar},
            ${proffyValue.whatsapp},
            ${proffyValue.bio}
        );
    `)

    const proffy_id = insertedProffy.lastID

    //inserir dados na tabela classes

    const insertedClass = await db.run(`
            INSERT INTO classes(
                subject,
                cost,
                proffy_id
            ) VALUES(
                ${classValue.subject},
                ${classValue.cost},
                ${proffy_id}
            )
    `)

    //inserir valores na tabela schedule
    const insertedAllClassesSchedulesValues = classScheduleValues.map((value) => {

    })
    

}
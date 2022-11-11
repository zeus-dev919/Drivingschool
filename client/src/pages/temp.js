import './temp.css'

const data = [
    {
        no: 'A',
        description: 'alumbrado, neumáticos, frenos y suspensión.',
        selected: true,

    }, {
        no: 'B',
        description: 'frenos, neumáticos, airbags y cinturones de seguridad.',
        selected: true,

    }, {
        no: 'C',
        description: 'cinturones de seguridad, airbags, apoyacabezas y casco.',
        selected: false,
    },
]

const numbers1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const numbers2 = [16,17,18,19,20,21,22,23,24, 25,26,27,28,29,30]


function Temp() {
    return (
        <>
            <div className="container">
                <div className='body'>
                    <img src="/assets/icons/image1.png" className='img' />
                    <div>
                        <div className='title'>Los sistemas de seguridad pasiva incluyen...</div>
                        {
                            data.map((item) => {
                                return (
                                    <div className='row'>
                                        {
                                            item.selected ? <div className='no-box'>{item.no}</div> : <div className='no-spec-box'>{item.no}</div>
                                        }

                                        <div className='description'>{item.description}</div>
                                    </div>
                                )
                            })
                        }
                        <button className='button left-btn'>ANTERIOR</button>
                        <button className='button'>SIGUIENTE</button>
                    </div>
                </div>
                <div className='numbers'>
                {numbers1.map((number) => (
                    <div className='num-box'>{number}</div>
                ))}
                
                </div>
                <div className='numbers'>
                {numbers2.map((number) => (
                    <div className='num-box'>{number}</div>
                ))}
                </div>
               
              
            </div>


        </>
    )
}

export default Temp;
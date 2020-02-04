import React from 'react';


function App() {
    return (
        <main>
            <section className='sidebar'>
                <h2 className='words'>words
                    <div className='ui'>4</div>
                </h2>
                <h2 className='learn'>learn
                    <div className='ui'>8</div>
                </h2>
                <h2 className='know'>know
                    <div className='ui'>10</div>
                </h2>
            </section>

            <form className='form-group'>
                <input type='text' className='input-left' placeholder='Enter world'/>
                <input type='text' className='input-right' placeholder='Translate'/>
                <button type='button' className='buttonForm'>✔</button>
            </form>
            
            <div className='cards'>
                <div className='newspaper'>
                    <h2 className='text'>fox</h2>
                    <div className="back">
                        <h2 className='translate'>лиса</h2>
                        <button className='plus'>✓</button>
                        <button className='minus'>×</button>
                    </div>
                </div>

                <div className='newspaper'>
                    <h2 className='text'>dog</h2>
                    <div className="back">
                        <h2 className='translate'>пес</h2>
                    <button className='plus'>✓</button>
                    <button className='minus'>×</button>
                     </div>
                </div>
            
                <div className='newspaper'>
                    <h2 className='text'>cat</h2>
                    <div className="back">
                        <h2 className='translate'>кошка</h2>
                        <button className='plus'>✓</button>
                        <button className='minus'>×</button>
                    </div>
                </div>
            </div>  

        </main>
    )
}

export default App
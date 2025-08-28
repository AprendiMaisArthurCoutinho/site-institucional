export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Planos</h2>
          <p>
            Conheça nossos planos e escolha o que melhor se encaixa para você.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-4'>
                <i className={d.icon}></i>
                <div className='service-desc'>
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>

                  {/* --- INÍCIO DA ALTERAÇÃO --- */}
                  {d.topicos ? (
                    <ul className='fa-ul text-left'>
                      {d.topicos.map((topico, index) => (
                        <li key={index}>
                          <span style={{ marginRight: '10px' }}>&#10003;</span> {/* &#10003; é o código para um check mark simples */}
                          {topico}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {/* --- FIM DA ALTERAÇÃO --- */}

                </div>
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
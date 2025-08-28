export const About = (props) => {
  return (
    <div id='contact'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <img src='img/contact.png' className='img-responsive' alt='Entre em contato' />
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='contact-text'>
              <h2>Contato</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              
              <div className='contact-details'>
                <div className='contact-item'>
                  <i className="fa fa-whatsapp"></i>
                  <a 
                    href={`https://wa.me/${props.data ? props.data.whatsapp_link : ''}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    // MUDANÇA AQUI: Adicionando estilo inline para imitar o parágrafo
                    style={{ color: '#ffffffff', textDecoration: 'none' }}
                  >
                    {props.data ? props.data.whatsapp : 'Carregando...'}
                  </a>
                </div>
                <div className='contact-item'>
                  <i className="fa fa-envelope-o"></i>
                  <a 
                    href={`mailto:${props.data ? props.data.email : ''}`}
                    // MUDANÇA AQUI: Adicionando estilo inline para imitar o parágrafo
                    style={{ color: '#ffffffff', textDecoration: 'none' }}
                  >
                    {props.data ? props.data.email : 'Carregando...'}
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
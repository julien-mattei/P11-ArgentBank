import './style.css'

import FeatureItem from '../../components/FeatureItem'


function Home () {
    const feature = [
      {
        "title":"You are our #1 priority",
        "image":"/icon-chat.png",
        "content":"Open a savings account with Argent Bank today!"
      },
      {
        "title":"More savings means higher rates",
        "image": "/icon-money.png",
        "content":"The more you save with us, the higher your interest rate will be!"
      },
      {
        "title":"Security you can trust",
        "image":"/icon-security.png",
        "content":"We use top of the line encryption to make sure your data and money is always safe."
      }
    ]

    return <>
    <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section className="features">
          {feature.map((items, idx) => 
            <FeatureItem
              key={idx}
              title={items.title}
              cover={items.image}
              content={items.content}
            />
          )}
        </section>
    </main>
    </>   
}

export default Home
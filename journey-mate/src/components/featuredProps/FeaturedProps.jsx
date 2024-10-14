import "./featuredProps.css"

const FeaturedProps = () => {
  return (
    <div className="fp">
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/64768746.webp?k=0c33d15be1f0c9ebd0ede9b85565c3233ef836884a40d785dd6b36f9f0f50c04&o=" alt="" className="fpImg" />
        <span className="fpName">Zoku Amsterdam</span>
        <span className="fpCity">Netherlands</span>
        <span className="fpPrice">Starting from ₹18,099</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/74065680.webp?k=2269b6b33c4d7c1d2b25d2964dc984eed76dc648fcd2b9d2073db0da10a1dc3b&o=" alt="" className="fpImg"/>
        <span className="fpName">VIP Residence</span>
        <span className="fpCity">Hungary</span>
        <span className="fpPrice">Starting from ₹32,080</span>
        <div className="fpRating">
            <button>9.6</button>
            <span>Fabulous</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o=" alt="" className="fpImg" />
        <span className="fpName">7-Seasons Apartments</span>
        <span className="fpCity">Hungary</span>
        <span className="fpPrice">Starting from ₹16,000</span>
        <div className="fpRating">
            <button>8.8</button>
            <span>Good</span>
        </div>
        </div>
        <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=" alt="" className="fpImg" />
        <span className="fpName">Cheval Three Quays</span>
        <span className="fpCity">London</span>
        <span className="fpPrice">Starting from ₹48,000</span>
        <div className="fpRating">
            <button>9.7</button>
            <span>Excellent</span>
        </div>
        </div>
    </div>
  )
}

export default FeaturedProps
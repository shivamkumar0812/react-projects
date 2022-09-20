import React  from 'react'

const Newsitem = (props) => {


    let {title, description, imageUrl, newsUrl, author, date} = props;
    return (
      <div>
        <div className="card">
          <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/107052848-1651148190055-gettyimages-1365692351-dsc00045.jpeg?v=1651149065&w=1920&h=1080":imageUrl} className="card-img-top" alt="Cricket SA has confirmed plans for a new T20 competition."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className='text-muted'>By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  
}

export default Newsitem

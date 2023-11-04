import awardData from "../../data/awards.json";

const Awards = () =>
  awardData.map((item, i) => (
    <div key={i} className="card mb-2">
      <div className="card-body">
        <h3 className="card-title">
          <a
            className="blogNav"
            href={item.url}
            rel="noreferrer"
            target="_blank"
          >
            {item.award} <i class="far fa-share-square ml-2"></i>
          </a>
        </h3>
        <p className="card-text">{item.abstract}</p>

        <div
          className="card text-white mb-3"
          style={{ borderColor: "#717171" }}
        >
          <div className="card-body" style={{ backgroundColor: "#717171" }}>
            <p className="card-text">{item.blockquote}</p>
            <figcaption className="blockquote-footer" style={{ color: "#fff" }}>
              {item.attribution}{" "}
              <cite title="Source Title">{item.attributionSource}</cite>
            </figcaption>
          </div>
        </div>

        {item.endorsements &&
          item.endorsements.map((item, i) => {
            return (
              <>
                <h5 className="card-title">{item.header}</h5>
                <ul>
                  {item.comments &&
                    item.comments.map((item, i) => {
                      return <li key={i}> {item} </li>;
                    })}
                </ul>
              </>
            );
          })}
      </div>
    </div>
  ));

export default Awards;

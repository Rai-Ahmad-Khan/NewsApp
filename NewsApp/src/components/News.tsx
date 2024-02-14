import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
export class News extends Component {
  // static propTypes = {};

  articles = [
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "MUNIR AHMED",
      title:
        "Imran Khan: Former Pakistan prime minister sentenced to 10 years in prison - The Associated Press",
      description:
        "A Pakistani court has convicted former Prime Minister Imran Khan of revealing official secrets and sentenced him to 10 years in prison. It is the latest in a slew of cases that supporters say are meant to sideline the imprisoned former cricket star just days …",
      url: "https://apnews.com/article/pakistan-imran-khan-sentenced-e2305d25c8b81f031a47507063e3b745",
      urlToImage:
        "https://dims.apnews.com/dims4/default/ee6c0c8/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fdb%2Fea%2F722be88ef897ae962ae4d35897e4%2F54bfbb3073054eab9d035a58002ee063",
      publishedAt: "2024-01-30T08:03:45Z",
      content:
        "ISLAMABAD (AP) A Pakistani court convicted former Prime Minister Imran Khan of revealing official secrets on Tuesday and sentenced him to 10 years the latest in a slew of legal cases that supporters … [+3446 chars]",
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "49ers stunning comeback makes NFL history plus 13 other crazy stats from the AFC and NFC championship games - CBS Sports",
      description: "It was a wild Sunday in the NFL",
      url: "https://www.cbssports.com/nfl/news/49ers-stunning-comeback-makes-nfl-history-plus-13-other-crazy-stats-from-the-afc-and-nfc-championship-games/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2024/01/29/bf851954-fa15-461a-95db-2ef742a13ea5/thumbnail/1200x675/c1f5c1eae374c1e8651864015f6839de/purdy888.jpg",
      publishedAt: "2024-01-30T06:13:00Z",
      content:
        "The San Francisco 49ers made NFL history on Sunday during their wild comeback win over the Detroit Lions. \r\nThe 49ers were trailing 24-7 at halftime before rallying back for a wild 34-31 win. The 17-… [+4299 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Eleanor Watson",
      title:
        "Pentagon releases names of 3 soldiers killed in drone attack in Jordan - CBS News",
      description:
        "Three U.S. service members will killed in a drone attack on a base in Jordan Sunday.",
      url: "https://www.cbsnews.com/news/soldiers-killed-jordan-names/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2024/01/29/02e7c48b-74d9-45a5-a533-b0396c2cf363/thumbnail/1200x630g2/f47db3e8495d6d7b0d56d7ce17fc7ad2/screenshot-2024-01-29-at-3-59-22-pm.png?v=d5d292229f42ff99b81040fe7c32f134",
      publishedAt: "2024-01-30T05:54:00Z",
      content:
        "The Pentagon announced the names of the three American service members who were killed in an unmanned aerial drone attack on a base in northeast Jordan on Sunday.\r\nIn a press release Monday, the Defe… [+2970 chars]",
    },

    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Dave McMenamin",
      title: "Lakers defend Vanderbilt for run-in with Brooks - ESPN",
      description:
        "The Lakers backed up Jarred Vanderbilt's decision to go at Rockets guard Dillon Brooks after a hard foul, even though it got the forward ejected in a blowout loss.",
      url: "https://www.espn.com/nba/story/_/id/39419716/lakers-defend-jarred-vanderbilt-run-dillon-brooks",
      urlToImage:
        "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0130%2Fr1284336_1023x682_3%2D2.jpg",
      publishedAt: "2024-01-30T05:43:00Z",
      content:
        "HOUSTON -- After Jarred Vanderbilt was ejected in the first half of Monday's 135-119 loss to the Houston Rockets for a run-in with Dillon Brooks, several members of the Los Angeles Lakers defended Va… [+3911 chars]",
    },

    {
      source: {
        id: null,
        name: "Www.geo.tv",
      },
      author: "Eloise Wells Morin",
      title:
        "Piers Morgan reacts as Kate Middleton returns home after surgery - Geo News",
      description:
        "Princess of Wales Kate Middleton returned home to Windsor to continue her recovery from surgery on Monday",
      url: "https://www.geo.tv/latest/529085-piers-morgan-reacts-as-kate-middleton-returns-home-after-surgery",
      urlToImage:
        "https://www.geo.tv/assets/uploads/updates/2024-01-30/l_529085_094615_updates.jpg",
      publishedAt: "2024-01-30T04:38:00Z",
      content:
        "Former Good Morning Britain host Piers Morgan has expressed his excitement after Kensington Palace announced that Princess of Wales Kate Middleton has returned home to Windsor to continue her recover… [+698 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: null,
      title:
        "Judge denies Alex Murdaugh's bid for new double-murder trial after hearing jury tampering allegations - CBS News",
      description:
        "A South Carolina judge on Monday denied Alex Murdaugh's bid for a new trial after his defense team accused a clerk of court with tampering with a jury.",
      url: "https://www.cbsnews.com/news/alex-murdaugh-bid-to-prove-jury-tampering-murder-conviction/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2024/01/29/ef3d4824-4463-4345-bb17-c5fb06241436/thumbnail/1200x630/ff999c7094fc1ab4b1bd8666ba9275c9/ap24029641882543.jpg?v=d5d292229f42ff99b81040fe7c32f134",
      publishedAt: "2024-01-30T02:52:00Z",
      content:
        "A South Carolina judge on Monday denied Alex Murdaugh's bid for a new trial after his defense team accused a clerk of court with tampering with a jury.\r\nJudge Jean Toal ruled that even if Colleton Co… [+6520 chars]",
    },
    {
      source: {
        id: null,
        name: "IFLScience",
      },
      author: "Laura Simmons",
      title:
        "Alzheimer's Disease Likely Transmitted To 5 Patients Via Banned Medical Procedure - IFLScience",
      description:
        "The procedure is no longer in use, so there’s no risk of further cases developing in this way.",
      url: "https://www.iflscience.com/alzheimers-disease-likely-transmitted-to-5-patients-via-banned-medical-procedure-72668",
      urlToImage:
        "https://assets.iflscience.com/assets/articleNo/72668/aImg/73759/amyloid-plaques-meta.jpg",
      publishedAt: "2024-01-30T02:10:28Z",
      content:
        "Five people with Alzheimers disease developed the condition as a result of a medical procedure decades earlier, a new study reports. While the procedure that has been implicated is no longer in use, … [+4771 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Daniel Leussink",
      title:
        "Toyota keeps crown as world's top-selling automaker in 2023 - Reuters",
      description:
        'Toyota Motor <a href="https://www.reuters.com/markets/companies/7203.T" target="_blank">(7203.T)</a> retained its crown as the world\'s top-selling automaker for the fourth consecutive year after posting record annual sales of 11.2 million in 2023, though its …',
      url: "https://www.reuters.com/business/autos-transportation/toyota-keeps-crown-worlds-top-selling-automaker-2023-2024-01-30/",
      urlToImage:
        "https://www.reuters.com/resizer/rKREzXzIcRjAQ1uF0c3U22nRr_Y=/1920x1005/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GVU56LKBHROGBF2PLZD6XWG6AM.jpg",
      publishedAt: "2024-01-30T01:39:03Z",
      content: null,
    },
    {
      source: {
        id: "buzzfeed",
        name: "Buzzfeed",
      },
      author: "Joseph Longo",
      title:
        "Milly Alcock Has Officially Been Cast As Supergirl In The DC Universe - BuzzFeed",
      description:
        "James Gunn confirmed Deadline's reporting on his Instagram page.",
      url: "https://www.buzzfeed.com/josephlongo/supergirl-milly-alcock-casting",
      urlToImage:
        "https://img.buzzfeed.com/buzzfeed-static/static/2024-01/30/0/enhanced/f28b3280bc9e/original-526-1706574918-2.jpg?crop=1244:651;0,89%26downsize=1250:*",
      publishedAt: "2024-01-30T00:57:56Z",
      content: null,
    },
  ];

  static defaultProps = {
    pageSize: 6,
    country: "in",
    category: "sports",
  };
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async UpdateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3189752d6f7f495c9c107062f22dc825&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   this.setState({loading:true})
    let data = await fetch(url);
    let parsed_data = await data.json();
    this.setState({
      articles: parsed_data.articles,
      totalResults: parsed_data.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    this.UpdateNews()
  }
  handelPrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.UpdateNews()
  };
  handelNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.UpdateNews()
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "10px 0" }}>
          NewsApp
        </h1>
        <h4 className="text-center" style={{ margin: "0 0 40px 0" }}>
          Top Headlines
        </h4>
        {this.state.loading && <Loading />}

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://www.buzzfeed.com/josephlongo/supergirl-milly-alcock-casting"
                  }
                  newsUrl={element.url}
                  source={element.source.name}
                  date={element.publishedAt}
                  auther={element.auther}
                />
              </div>
            );
          })}
          
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handelPrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handelNextClick}
          >
            &rarr; Next
          </button>
        </div>
      </div>
    );
  }
}
export default News;

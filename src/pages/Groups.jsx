import React, { useState, useEffect } from "react";

// bootstrap
import { Form, Button, FormControl } from "react-bootstrap";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faPaperPlane,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

// INTERNAL IMPORTS
import myGroups from "../data/myGroups.json";
import feedData from "../data/feedData.json";

const Groups = () => {
  const [inputShareValue, setInputShareValue] = useState(""); // State to keep track of share something text
  const [inputCommentValue, setInputCommentValue] = useState(""); // State to keep track of comment input text

  // set state for share text box when text updated
  const handleShareInputChange = (event) => {
    setInputShareValue(event.target.value); // Update state with input value
  };

  // set state for comment text box when text updated
  const handleCommentInputChange = (event) => {
    setInputCommentValue(event.target.value); // Update state with input value
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // handles search groups
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Search term submitted: " + searchTerm);
  };

  return (
    <>
      <div>
        <header>
          <h1>Groups</h1>
          <p>
            The woman's business hub creates an inclusive culture to
            successfully harness entrepreneur's potential to truly transform
            society.
          </p>
        </header>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-8 col-xl-8">
              <section className="share-something-section">
                <div className="share-something">
                  <div className="row">
                    <div className="col-9 col-md-10 col-lg-10 col-xl-10">
                      <Form>
                        <Form.Group
                          className="mb-3 text-input"
                          controlId="text"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Share something..."
                            value={inputShareValue}
                            onChange={handleShareInputChange}
                          />
                        </Form.Group>
                      </Form>
                    </div>
                    <div className="col-1 col-md-2 col-lg-2 col-xl-2">
                      <Button variant="primary" className="post-btn">
                        Post
                      </Button>{" "}
                    </div>
                  </div>

                  <div className="share-options">
                    <a>Photo</a>
                    <a>Video</a>
                    <a>GIF</a>
                  </div>
                </div>
              </section>

              <div>
                {/* dynamically render feed here*/}
                <section className="feed-section">
                  {/* dynamically render my groups here */}
                  {feedData.map((feed, index) => (
                    <React.Fragment key={index}>
                      <div className="container-fluid feed">
                        <div className="row feed-header">
                          <div className="col-1">
                            <h5 className="initials">{feed.initials}</h5>
                          </div>
                          <div className="col-10 feed-info">
                            <p>{feed.name}</p>
                            <p className="date-posted">
                              {feed["date-posted"]} Posted on: {feed.group}
                            </p>
                          </div>
                        </div>

                        <div className="row">
                          <p className="feed-message">{feed.message}</p>
                        </div>

                        <div className="row">
                          <div className="react-icons">
                            {/* react icons */}
                            <a>
                              <FontAwesomeIcon icon={faThumbsUp} /> Like
                            </a>
                            <a>
                              <FontAwesomeIcon icon={faComment} /> Comment
                            </a>
                            <a>
                              <FontAwesomeIcon icon={faPaperPlane} /> Send
                            </a>
                          </div>
                        </div>

                        <div className="row">
                          <Form className="comment-input">
                            <Form.Group className="mb-3" controlId="comment">
                              <Form.Control
                                type="text"
                                placeholder="Write a comment..."
                                value={inputCommentValue}
                                onChange={handleCommentInputChange}
                              />
                            </Form.Group>
                          </Form>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </section>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
              <section id="my-groups-section">
                <div className="my-groups">
                  <div className="search-group-outline">
                    <Form onSubmit={handleSubmit} className="search-group">
                      <Button
                        type="submit"
                        variant="outline-success"
                        className="group-search-btn"
                      >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </Button>
                      <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2 group-search-input"
                        // value={searchTerm}
                        // onChange={handleInputChange}
                      />
                    </Form>
                  </div>
                  <h3 className="my-groups-h3">My Groups</h3>
                  {/* dynamically render my groups here */}
                  {myGroups.map((group, index) => (
                    <React.Fragment key={index}>
                      <div className="container-fluid">
                        <div className="row my-group">
                          <div className="col-4">
                            <img src={group.image} className="groups-img"></img>
                          </div>
                          <div className="col-8 group-info">
                            <h4>{group.name}</h4>
                            <p>Members: {group.members}</p>
                          </div>
                        </div>
                        <hr></hr>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;

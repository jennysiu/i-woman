import React, { useState } from "react";

// bootstrap
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Groups = () => {
  const [inputValue, setInputValue] = useState(""); // State to keep track of input

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update state with input value
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
            <div className="col-8">
              <section className="share-something">
                <div className="row">
                  <div className="col-10">
                    <Form>
                      <Form.Group className="mb-3" controlId="text">
                        <Form.Control
                          type="text"
                          placeholder="Share something..."
                          value={inputValue}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="col-2">
                    <Button
                      variant="primary"
                      className="post-btn"
                    >
                      Post
                    </Button>{" "}
                  </div>
                </div>

                <div className="share-options">
                  <a>Photo</a>
                  <a>Video</a>
                  <a>GIF</a>
                </div>
              </section>

              <div>
                <section className="feed">
                {/* dynamically render feed here*/}
                </section>
              </div>
            </div>

            <div className="col-4">
              <section>
                <h3>My Groups</h3>
                {/* dynamically render my groups here */}
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;

import React from "react";

const projectCard = () => {
  return (
    <>
      <div
        className="ant-col ant-col-sm-24 ant-col-md-8 ant-col-lg-4"
        style={{paddingLeft: "16px", paddingRight: "16px"}}
      >
        <div className="projectCardContain">
          <div className="top_bar_box">
            <p className="top_bar_box_p">Project23_yasir</p>
          </div>
          <div className="projectContentContainer">
            <div style={{marginTop: "-3px"}}>
              <div>
                <div>
                  <p className="templateProject">
                    <b>Template: </b> General
                  </p>
                </div>
                <div style={{display: "flex"}}>
                  <div className="fileTypesssTextDiv">
                    <b className="fileTypesssText">File Types:</b>
                  </div>
                  <p className="fileTypesss">MP3, JPG, PNG, MP4, PDF, XML, CSV</p>
                </div>
              </div>
            </div>
            <div style={{paddingLeft: "5px", marginTop: "10px"}}>
              <div data-testid="insights-modal">
                <div className="iconsPROJECTCARD">
                  <span
                    role="img"
                    aria-label="user"
                    color="#007aff"
                    className="anticon anticon-user projectAnalyticIcon"
                    style={{color: "rgb(0, 122, 255)"}}
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="user"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                    </svg>
                  </span>
                  <span className="projectAnalyticP"> 2 Users</span>
                </div>
                <div className="iconsPROJECTCARD">
                  <span
                    role="img"
                    aria-label="file"
                    className="anticon anticon-file projectAnalyticIcon"
                    style={{color: "rgb(0, 122, 255)"}}
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="file"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"></path>
                    </svg>
                  </span>
                  <span className="projectAnalyticP"> 9 Files</span>
                </div>
                <div className="iconsPROJECTCARD">
                  <span
                    role="img"
                    aria-label="file-search"
                    className="anticon anticon-file-search projectAnalyticIcon"
                    style={{color: "rgb(0, 122, 255)"}}
                  >
                    <svg
                      viewBox="64 64 896 896"
                      focusable="false"
                      data-icon="file-search"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm144 452H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm445.7 51.5l-93.3-93.3C814.7 780.7 828 743.9 828 704c0-97.2-78.8-176-176-176s-176 78.8-176 176 78.8 176 176 176c35.8 0 69-10.7 96.8-29l94.7 94.7c1.6 1.6 3.6 2.3 5.6 2.3s4.1-.8 5.6-2.3l31-31a7.9 7.9 0 000-11.2zM652 816c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                    </svg>
                  </span>
                  <span className="projectAnalyticP"> 305 Insights</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="ant-divider ant-divider-horizontal projectCardDivider"
            role="separator"
          ></div>
          <div className="tagsProjectContainer">
            <span style={{display: "flex"}}>
              <div>
                <p style={{fontWeight: "bold", marginBottom: "0px", marginTop: "2px", fontSize: "12px"}}>
                  Tags:
                </p>
              </div>
              <div style={{marginLeft: "2px"}}>
                <span className="tagsProject">
                  <span
                    data-testid="file-types-tags"
                    className="ant-tag ant-tag-has-color"
                    style={{backgroundColor: "rgb(0, 122, 255)", margin: "2px", padding: "0px 2px"}}
                  >
                    <p className="mg-0" style={{fontSize: "12px"}}>
                      mp3
                    </p>
                  </span>
                  <span
                    data-testid="file-types-tags"
                    className="ant-tag ant-tag-has-color"
                    style={{backgroundColor: "rgb(0, 122, 255)", margin: "2px", padding: "0px 2px"}}
                  >
                    <p className="mg-0" style={{fontSize: "12px"}}>
                      jpg
                    </p>
                  </span>
                  <span
                    data-testid="file-types-tags"
                    className="ant-tag ant-tag-has-color"
                    style={{backgroundColor: "rgb(0, 122, 255)", margin: "2px", padding: "0px 2px"}}
                  >
                    <p className="mg-0" style={{fontSize: "12px"}}>
                      png
                    </p>
                  </span>
                </span>
              </div>
            </span>
            <span
              role="img"
              aria-label="delete"
              data-testid="delete-icon"
              tabindex="-1"
              className="anticon anticon-delete"
              style={{fontSsize: "20px", zIndex: "10"}}
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="delete"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default projectCard;

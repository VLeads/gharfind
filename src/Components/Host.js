import React, { useState } from "react";
import { Button } from "react-bootstrap";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Gallery from "react-amazon-gallery";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import UploadImg from "./UploadImg";
import "../Styles/Host.css";

toast.configure();
const Host = () => {
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);

  const [roomPicture, setRoomPicture] = useState([]);
  const [roomImgData, setRoomImgData] = useState([]);
  const [price, setPrice] = useState(0);
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState(null);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: "",
    lng: "",
  });
  const [extra, setExtra] = useState("");
  const handleSelect = (value) => {
    geocodeByAddress(value)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        setCoordinates(latLng);
        setAddress(value);
      })
      .catch((error) => {
        // console.error("Error", error);
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      });
  };

  const searchOptions = {
    types: ["address"],
  };

  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      var pattern = /image-*/;

      if (!file.type.match(pattern)) {
        alert("Please select valid image format only !");
        return;
      } else {
        setPicture(e.target.files[0]);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setImgData(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
      }
    }
  };

  const onChangeRoomPicture = (e) => {
    if (e.target.files.length) {
      const files = e.target.files;
      const pattern = /image-*/;
      const imgSource = [];
      for (let i = 0; i < files.length; i++) {
        if (!files[i].type.match(pattern) || files.length > 5) {
          alert("Invalid image format or you exceed image max count(5) !");
          setRoomImgData([]);
          setRoomPicture([]);
          return;
        } else {
          // const imgArray = Array.from(e.target.files).map(
          const imgArray = Array.from(files).map(
            (img) => URL.createObjectURL(img) //converts the image into blob url
          );

          setRoomImgData(imgArray);
          // setImgData((prevImages) => prevImages.concat(imgArray));
          // Array.from(e.target.files).map(
          //   (file) => URL.revokeObjectURL(file) //avoid memory leak
          // );
        }
      }

      setRoomPicture(e.target.files);
    }
  };

  const handleForm = (form, e) => {
    // e.preventdefault();
  };

  function showMessage() {
    if (
      imgData &&
      roomImgData &&
      price &&
      username &&
      mobile &&
      city &&
      state &&
      address &&
      extra
    ) {
      toast.success(
        "You have successfuly submitted your data, we'll notify you once it is approved !",
        {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2800,
        }
      );
    } else {
      toast.error("Please fill complete form !!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
  }

  return (
    <div className="main-wrapper" style={{ marginTop: "45px" }}>
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            {/* <div className="col-md-2">Edit a Doctor</div> */}
            <div className="col-md-10 col-lg-8 col-xl-9">
              <div
                style={{
                  fontSize: "20px",
                  // marginLeft: "20px"
                }}
              >
                Add your Listing
              </div>
              {/* Basic Information */}
              <div
                className="card"
                style={{ marginTop: "20px", width: "110%" }}
              >
                <div className="card-body">
                  <h4 className="card-title">Upload Your Photo</h4>
                  <div className="row form-row">
                    <div className="col-md-10">
                      <div className="form-group">
                        <div className="change-avatar">
                          <div className="profile-img">
                            <img
                              style={{ marginLeft: "20px" }}
                              src={
                                imgData ? imgData : "assets/img/placeholder.png"
                              }
                              width="100px"
                              alt="Img"
                            ></img>
                          </div>

                          <div className="upload-img">
                            <div className="change-photo-btn">
                              <input
                                type="file"
                                className="upload"
                                name="image"
                                onChange={onChangePicture}
                                accept="image/*"
                              ></input>
                            </div>
                            <small className="form-text text-muted">
                              Allowed JPG, JPEG or PNG
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="card"
                style={{ marginTop: "20px", width: "110%" }}
              >
                <div className="card-body">
                  <h4 className="card-title">Basic Details</h4>
                  <div className="row form-row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>
                          Your Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        ></input>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-group">
                        <label>
                          Mobile Number <span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          name="mobileNumber"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                        ></input>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-group">
                        <label>
                          Price (₹/night):{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          name="mobileNumber"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Address */}
              <div
                className="card"
                style={{ marginTop: "20px", width: "110%" }}
              >
                <div className="card-body">
                  <h4 className="card-title">Address</h4>
                  <div className="row form-row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          City <span class="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          onInput={(e) =>
                            (e.target.value = e.target.value.slice(0, 20))
                          }
                        ></input>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>
                          State<span class="text-danger">*</span>{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="state"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          onInput={(e) =>
                            (e.target.value = e.target.value.slice(0, 20))
                          }
                        ></input>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>
                          Address <span class="text-danger">*</span>
                        </label>
                        <PlacesAutocomplete
                          // value={address ? address : streetVal}
                          value={address}
                          onChange={setAddress}
                          onSelect={handleSelect}
                          searchOptions={searchOptions}
                        >
                          {({
                            getInputProps,
                            suggestions,
                            getSuggestionItemProps,
                            loading,
                            searchText,
                          }) => (
                            <div>
                              <input
                                type="text"
                                name="street"
                                class="form-control"
                                {...getInputProps({})}
                                // value={formik.values.address}
                                // onChange={formik.handleChange}
                                // onBlur={formik.handleBlur}
                                required
                              />

                              <div>
                                {loading ? <div>...loading</div> : null}
                                {suggestions.map((suggestion) => {
                                  const style = {
                                    backgroundColor: suggestion.active
                                      ? "#41b6e6"
                                      : "#fff",
                                  };
                                  return (
                                    <div
                                      {...getSuggestionItemProps(suggestion, {
                                        style,
                                      })}
                                    >
                                      {suggestion.description}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </PlacesAutocomplete>

                        {/* {formik.touched.address && formik.errors.address ? (
                          <div className="err">{formik.errors.address}</div>
                        ) : null} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ----- */}
              <div
                className="card"
                style={{ marginTop: "20px", width: "110%" }}
              >
                <div className="card-body">
                  <h4 className="card-title">Extra</h4>
                  <div className="row form-row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>
                          Write something about the stay you are offering{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <textarea
                          rows={3}
                          type="text"
                          className="form-control"
                          name="name"
                          value={extra}
                          onChange={(e) => setExtra(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ------- */}
              <div class="card" style={{ marginTop: "20px", width: "110%" }}>
                <div class="card-body">
                  <h4 className="card-title">Room Pictures</h4>
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="change-avatar">
                        <div className="profile-img">
                          <img
                            style={{ marginLeft: "20px" }}
                            src={
                              roomImgData?.length
                                ? roomImgData[0]
                                : "assets/img/placeholder.png"
                            }
                            width="100px"
                            alt="Img"
                          ></img>
                        </div>
                        <div className="upload-img">
                          <div className="change-photo-btn">
                            <span>
                              <i className="fa fa-upload"></i> Upload Room
                              Photos
                            </span>
                            <input
                              type="file"
                              className="upload"
                              name="image"
                              onChange={onChangeRoomPicture}
                              accept="image/*"
                              multiple
                            ></input>
                          </div>
                          <small className="form-text text-muted">
                            Max 5 images are allowed
                          </small>
                        </div>
                        {/* {console.log("img", imgData)} */}
                        <div className="imgPreview">
                          {/* {renderPhotos(imgData)} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ------- */}
              {roomImgData ? (
                <div class="card" style={{ width: "110%" }}>
                  <div class="card-body">
                    <div className="change-avatar">
                      <Gallery
                        images={
                          roomImgData?.length
                            ? roomImgData
                            : "http://www.clker.com/cliparts/f/a/0/c/1434020125875430376profile-md.png"
                        }
                      />
                    </div>
                  </div>
                </div>
              ) : null}
              {/* ---- */}
              <Button
                variant="primary"
                style={{ margin: "2rem", textTransform: "inherit" }}
                onClick={showMessage}
              >
                Add your listing
              </Button>
            </div>
          </div>
        </div>

        {/* <UploadImg /> */}
        {/* <FormControl onClick={(e) => handleForm(e)}>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl> */}
      </div>
    </div>
  );
};

export default Host;

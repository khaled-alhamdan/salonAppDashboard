import React, { useState } from "react";
// Importing categorys store
import categoryStore from "../stores/categoryStore";

import Modal from "react-modal";
import {
  CreateButtonStyled,
  ModalInput,
  ModalInputDiv,
  ModalLabels,
  ClosingModalX,
} from "../styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CategoryModal = ({ oldCategory, isOpen, closeModal }) => {
  const [category, setCategory] = useState(
    oldCategory ?? {
      name: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setCategory({
      ...category,
      [event.target.name]:
        event.target.name === "image"
          ? event.target.files[0]
          : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent refreshing the page
    categoryStore[oldCategory ? "updateCategory" : "createCategoryForSalon"](
      category
    );
    closeModal();
  };

  return (
    <>
      {isOpen ? (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <form onSubmit={handleSubmit}>
            <ClosingModalX onClick={closeModal} />
            <div>
              <div>
                <ModalLabels>Name :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="text"
                    placeholder="Enter category Name"
                    name="name"
                    value={category.name}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels>Image :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="file"
                    placeholder="Enter category Image"
                    name="image"
                    // value={category.image}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
            </div>
            <CreateButtonStyled
              className="btn float-right"
              onSubmit={handleSubmit}
            >
              {oldCategory ? "Update" : "Create"}
            </CreateButtonStyled>
          </form>
        </Modal>
      ) : null}
    </>
  );
};

export default CategoryModal;

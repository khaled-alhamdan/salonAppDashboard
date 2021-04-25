import React from "react";
import salonAuth from "../../stores/salonAuth";
import { observer } from "mobx-react";
// Importing buttons
import UpdateButton from "../Buttons/UpdateButton";
// Importing salon modal component
import SalonModal from "../../modals/SalonModal";
// Importing Loading
import Loading from "../Loading/Loading";
// Importing from styles
import {
  ProfileWrapper,
  ProfileContainer,
  ImageAndIconsWrapper,
  SalonImage,
  IconsWrapper,
  InfoWrapper,
  InfoContainer,
  TextContainer,
  TitleStyle,
  InfoStyle,
} from "../../styles";

const SalonDetailPage = ({ modalStatus, isOpen, closeModal }) => {
  return (
    <div>
      {!salonAuth.loading ? (
        <>
          <ProfileWrapper>
            <ProfileContainer>
              <ImageAndIconsWrapper>
                {salonAuth.salon.image ? (
                  <SalonImage
                    // alt={salonAuth.salon.username}
                    src={salonAuth.salon.image}
                  />
                ) : (
                  <SalonImage />
                )}
                <IconsWrapper>
                  <button> Setting </button>
                  <UpdateButton
                    oldSalon={salonAuth.salon}
                    modalStatus={modalStatus}
                  />
                </IconsWrapper>
              </ImageAndIconsWrapper>
              <InfoWrapper>
                <InfoContainer>
                  <TextContainer>
                    <TitleStyle> Name</TitleStyle>
                    <div>
                      <InfoStyle>{salonAuth.salon.username}</InfoStyle>
                    </div>
                  </TextContainer>
                  {/*  */}

                  <TextContainer>
                    <TitleStyle>Role</TitleStyle>
                    <div>
                      <InfoStyle>{salonAuth.salon.role}</InfoStyle>
                    </div>
                  </TextContainer>

                  {/*  */}
                  <TextContainer>
                    <TitleStyle>Location</TitleStyle>
                    <div>
                      <InfoStyle>{salonAuth.salon.address}</InfoStyle>
                    </div>
                  </TextContainer>

                  {/*  */}
                  <TextContainer>
                    <TitleStyle>Gender</TitleStyle>
                    <div>
                      <InfoStyle>{salonAuth.salon.gender}</InfoStyle>
                    </div>
                  </TextContainer>

                  {/*  */}
                  <TextContainer>
                    <TitleStyle>Email</TitleStyle>
                    <div>
                      <InfoStyle>{salonAuth.salon.email}</InfoStyle>
                    </div>
                  </TextContainer>

                  {/*  */}
                  <TextContainer>
                    <TitleStyle>Phone</TitleStyle>
                    <div>
                      <InfoStyle>{salonAuth.salon.phone}</InfoStyle>
                    </div>
                  </TextContainer>
                </InfoContainer>
              </InfoWrapper>
            </ProfileContainer>
          </ProfileWrapper>
          <SalonModal
            isOpen={isOpen}
            modalStatus={modalStatus}
            closeModal={closeModal}
            oldSalon={salonAuth.salon}
          />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default observer(SalonDetailPage);

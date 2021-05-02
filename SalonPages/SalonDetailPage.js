import React from "react";
import salonAuth from "../../stores/salonAuth";
import { observer } from "mobx-react";
// Importing buttons
import UpdateButton from "../Buttons/UpdateButton";
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
  ProfileFeildTitle,
  ProfileInputFeildDiv,
  ProfileInputFeildValue,
} from "../../styles";

const SalonDetailPage = () => {
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
                  {/* <button> Setting </button> */}
                  <UpdateButton salon={salonAuth.salon} />
                </IconsWrapper>
              </ImageAndIconsWrapper>
              <InfoWrapper>
                <InfoContainer>
                  <div>
                    <ProfileFeildTitle> Salon Name</ProfileFeildTitle>
                    <ProfileInputFeildDiv>
                      <ProfileInputFeildValue>
                        {salonAuth.salon.username}
                      </ProfileInputFeildValue>
                    </ProfileInputFeildDiv>
                  </div>

                  <div>
                    <ProfileFeildTitle> Role</ProfileFeildTitle>
                    <ProfileInputFeildDiv>
                      <ProfileInputFeildValue>
                        {salonAuth.salon.role} manager
                      </ProfileInputFeildValue>
                    </ProfileInputFeildDiv>
                  </div>

                  <div>
                    <ProfileFeildTitle> Address</ProfileFeildTitle>
                    <ProfileInputFeildDiv>
                      <ProfileInputFeildValue>
                        {salonAuth.salon.address}
                      </ProfileInputFeildValue>
                    </ProfileInputFeildDiv>
                  </div>

                  <div>
                    <ProfileFeildTitle> Gender </ProfileFeildTitle>
                    <ProfileInputFeildDiv>
                      <ProfileInputFeildValue>
                        {salonAuth.salon.gender}
                      </ProfileInputFeildValue>
                    </ProfileInputFeildDiv>
                  </div>

                  <div>
                    <ProfileFeildTitle> Email </ProfileFeildTitle>
                    <ProfileInputFeildDiv>
                      <ProfileInputFeildValue>
                        {salonAuth.salon.email}
                      </ProfileInputFeildValue>
                    </ProfileInputFeildDiv>
                  </div>

                  <div>
                    <ProfileFeildTitle> Phone </ProfileFeildTitle>
                    <ProfileInputFeildDiv>
                      <ProfileInputFeildValue>
                        {salonAuth.salon.phone}
                      </ProfileInputFeildValue>
                    </ProfileInputFeildDiv>
                  </div>
                </InfoContainer>
              </InfoWrapper>
            </ProfileContainer>
          </ProfileWrapper>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default observer(SalonDetailPage);

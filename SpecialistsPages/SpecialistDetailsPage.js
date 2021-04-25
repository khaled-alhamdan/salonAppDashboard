import React from "react";
// Importing specialistStore
import specialistStore from "../../stores/specialistStore";
// Importing observer
import { observer } from "mobx-react";
// Importing use params
import { useParams } from "react-router-dom";
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
  DeleteButton,
} from "../../styles";
// Importing useHistory
import { useHistory } from "react-router-dom";
// Importing Loading
import Loading from "../Loading/Loading";

const SpecialistDetailsPage = () => {
  const { specialistId } = useParams();
  const history = useHistory();

  if (specialistStore.loading) return <hLoading />;
  const aSpecialists = specialistStore.specialists.find(
    (specialist) => +specialist.id === +specialistId
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    specialistStore.deleteSpecialist(specialistId);
    alert("Specialist account has been deleted");
    history.push(`/specialists`);
  };
  return (
    <div>
      {aSpecialists ? (
        <>
          <ProfileWrapper>
            <ProfileContainer>
              <ImageAndIconsWrapper>
                {aSpecialists.image ? (
                  <SalonImage
                    // alt={salonAuth.salon.username}
                    src={aSpecialists.image}
                  />
                ) : (
                  <SalonImage />
                )}
                <IconsWrapper>
                  <DeleteButton onClick={handleSubmit}> Delete </DeleteButton>
                </IconsWrapper>
              </ImageAndIconsWrapper>
              <InfoWrapper>
                <InfoContainer>
                  <TextContainer>
                    <TitleStyle> First name</TitleStyle>
                    <div>
                      <InfoStyle>{aSpecialists.firstName}</InfoStyle>
                    </div>
                  </TextContainer>
                  {/*  */}

                  <TextContainer>
                    <TitleStyle>Last name</TitleStyle>
                    <div>
                      <InfoStyle>{aSpecialists.lastName}</InfoStyle>
                    </div>
                  </TextContainer>

                  {/*  */}
                  <TextContainer>
                    <TitleStyle>Username </TitleStyle>
                    <div>
                      <InfoStyle>{aSpecialists.username}</InfoStyle>
                    </div>
                  </TextContainer>

                  {/*  */}
                  <TextContainer>
                    <TitleStyle>Gender</TitleStyle>
                    <div>
                      <InfoStyle>{aSpecialists.gender}</InfoStyle>
                    </div>
                  </TextContainer>

                  {/*  */}
                  <TextContainer>
                    <TitleStyle>Email</TitleStyle>
                    <div>
                      <InfoStyle>{aSpecialists.email}</InfoStyle>
                    </div>
                  </TextContainer>

                  {/*  */}
                  <TextContainer>
                    <TitleStyle>Phone</TitleStyle>
                    <div>
                      <InfoStyle>{aSpecialists.phone}</InfoStyle>
                    </div>
                  </TextContainer>

                  {/*  */}
                  <TextContainer>
                    <TitleStyle>Timeslots</TitleStyle>
                    <div>
                      <InfoStyle>
                        {aSpecialists.timeslots ? (
                          <>{aSpecialists.timeslots}</>
                        ) : (
                          <h4> Unsetted</h4>
                        )}
                      </InfoStyle>
                    </div>
                  </TextContainer>
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

export default observer(SpecialistDetailsPage);

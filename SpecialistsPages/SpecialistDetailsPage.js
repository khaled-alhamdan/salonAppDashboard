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
  DeleteButton,
  ProfileFeildTitle,
  ProfileInputFeildDiv,
  ProfileInputFeildValue,
} from "../../styles";
// Importing useHistory
import { useHistory } from "react-router-dom";
// Importing Loading
import Loading from "../Loading/Loading";

const SpecialistDetailsPage = () => {
  const { specialistId } = useParams();
  const history = useHistory();

  if (specialistStore.loading) return <Loading />;
  const aSpecialists = specialistStore.specialists.find(
    (specialist) => +specialist.id === +specialistId
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    specialistStore.deleteSpecialist(specialistId);
    // alert("Specialist account has been deleted");
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
                  <div>
                    <ProfileFeildTitle> First name</ProfileFeildTitle>
                    <ProfileInputFeildDiv>
                      <ProfileInputFeildValue>
                        {aSpecialists.firstName}
                      </ProfileInputFeildValue>
                    </ProfileInputFeildDiv>
                  </div>

                  <div>
                    <ProfileFeildTitle> Last name</ProfileFeildTitle>
                    <ProfileInputFeildDiv>
                      <ProfileInputFeildValue>
                        {aSpecialists.lastName}
                      </ProfileInputFeildValue>
                    </ProfileInputFeildDiv>
                  </div>

                  <div>
                    <ProfileFeildTitle> Username</ProfileFeildTitle>
                    <ProfileInputFeildDiv>
                      <ProfileInputFeildValue>
                        {aSpecialists.username}
                      </ProfileInputFeildValue>
                    </ProfileInputFeildDiv>
                  </div>

                  <div>
                    <ProfileFeildTitle> Gender</ProfileFeildTitle>
                    <ProfileInputFeildDiv>
                      <ProfileInputFeildValue>
                        {aSpecialists.gender}
                      </ProfileInputFeildValue>
                    </ProfileInputFeildDiv>
                  </div>

                  <div>
                    <ProfileFeildTitle> Email</ProfileFeildTitle>
                    <ProfileInputFeildDiv>
                      <ProfileInputFeildValue>
                        {aSpecialists.email}
                      </ProfileInputFeildValue>
                    </ProfileInputFeildDiv>
                  </div>

                  <div>
                    <ProfileFeildTitle> Phone</ProfileFeildTitle>
                    <ProfileInputFeildDiv>
                      <ProfileInputFeildValue>
                        {aSpecialists.phone}
                      </ProfileInputFeildValue>
                    </ProfileInputFeildDiv>
                  </div>

                  <div>
                    <ProfileFeildTitle> Timeslots</ProfileFeildTitle>
                    <ProfileInputFeildDiv>
                      {aSpecialists.timeslots ? (
                        <ProfileInputFeildValue>
                          {aSpecialists.timeslots}
                        </ProfileInputFeildValue>
                      ) : (
                        <>
                          <ProfileInputFeildValue>
                            10AM - 4PM
                          </ProfileInputFeildValue>
                          <ProfileInputFeildValue>
                            6PM - 10PM
                          </ProfileInputFeildValue>
                        </>
                      )}
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

export default observer(SpecialistDetailsPage);

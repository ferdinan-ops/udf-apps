import Posts from "@components/Home/Post";
import Feed from "@components/main/Feed";
import ProfileDetail from "./ProfileDetail";
import ProfileImage from "./ProfileImage";
import ProfilePost from "./ProfilePost";

export default function Profile(props) {
  const { user, allPosts, userSessionId } = props;
  const questions = allPosts.length;

  return (
    <Feed title={user.username}>
      <ProfileImage user={user} />
      <ProfileDetail
        user={user}
        questions={questions}
        isUserHave={userSessionId === user.id}
      />
      <ProfilePost {...props} />
    </Feed>
  );
}
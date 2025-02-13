import { Profile } from '~/types/CV';

export function getProfilePictureFromProfile(profile: Profile): string | null {
  if (profile.person.image) {
    if (profile.person.image.isURL) {
      return profile.person.image.path;
    }
    return (`/images/profile/${profile.person.name.first.toLowerCase()}/${
      profile.person.image.path
    }`);
  }
  return null;
}

import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { StyledSocialIcon } from './styles/SocialIcon.styled';
export function SocialIcon() {
    return (
        <StyledSocialIcon>
            <ul>
                <li>
                    <a href="https://twitter.com"><FaTwitter /></a>
                    <a href="https://facebook.com"><FaFacebook /></a>
                    <a href="https://linkedin.com"><FaLinkedin /></a>
                </li>

            </ul>
        </StyledSocialIcon>
    );
}

export default SocialIcon;
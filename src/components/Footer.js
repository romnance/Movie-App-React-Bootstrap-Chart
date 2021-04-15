import ModalFooter from 'react-bootstrap/ModalFooter';
import styled from 'styled-components';

const Styles = styled.div`
    .modal-footer {
        background-color:#222;
        display:flex;
        justify-content:center;
        margin:auto;
    }

    a {
        color: #bbb;
        &:hover {
            color: ghostwhite;
        }
    }
`


const Footer = () => (
    <Styles>
        <ModalFooter><a href='https://github.com/romnance?tab=repositories'>Copyright &#169; 2021 GitHub</a></ModalFooter>
    </Styles>
  );
  
export default Footer;
import React from 'react';
import Card from '../components/Card';
import folio01 from '../assets/images/folio01.png';
import folio02 from '../assets/images/folio02.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'WellDone',
                    subTitle: 'An IoT Application for the NGO Well-Done',
                    imgSrc: folio01,
                    link: 'https://github.com/Lambda-School-Labs/well-done-fe',
                    selected: false
                },
                {
                    id: 1,
                    title: 'FoodTruck Trackr',
                    subTitle: 'Node Project',
                    imgSrc: folio02,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
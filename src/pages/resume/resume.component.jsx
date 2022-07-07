import React from 'react';


class Resume extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        const artUrl = 'https://www.webcoding.ro/wp-json/wp/v2/posts?categories=20&per_page=100&order=asc';

        fetch(artUrl)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    articles: response
                })
            })
    }

    render() {
        return (
            <div className='work-bench'>
                sdsfsdf
            </div>
        )
    }
}

export default Resume;
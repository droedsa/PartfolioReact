import React from "react";
import Header from "../app-header/header";
import SearchPanel from "../search-panel/seacrh-panel";
import PostFilterPanel from "../post-status-filter/post-filter-pane";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import "./app.css"

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:
                [
                    {label: 'Hello world', important: true, like: false, id: '1'},
                    {label: 'NO world', important: false, like: false, id: '2'},
                    {label: 'LEL world', important: false, like: false, id: '3'},
                ],
            term: '',
            filter: 'all'

        };

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        };
        this.setState(({data}) => {
            return {
                data: [...data, newItem]
            }
        });
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }

    searchPanel(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        });
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else return items
    }

    onFilterSelect(filter) {
        this.setState(({filter}))
    }

    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter((item) => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPanel(data, term), filter);

        return <div className='app'>
            <Header liked={liked} allPosts={allPosts}/>
            <div className='searc-panel d-flex '>
                <SearchPanel onUpDateSearch={this.onUpdateSearch}/>
                <PostFilterPanel filter={filter} onFilterSelect={this.onFilterSelect}/>
            </div>
            <PostList posts={visiblePosts}
                      onDelete={this.deleteItem}
                      onToggleImportant={this.onToggleImportant}
                      onToggleLiked={this.onToggleLiked}
            />
            <PostAddForm onAdd={this.addItem}/>
        </div>
    }
}



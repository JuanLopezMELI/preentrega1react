import "./BasicPage.css";
/*eslint-disable react/prop-types*/

export const BasicPage = ({title}) => {
    return (
        <div className="basic-page">
            <h1 className="basic-page-title">{title}</h1>
        </div>
    );
};
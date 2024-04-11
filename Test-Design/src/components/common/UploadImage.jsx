function UploadImage(){
    return(
        <>
            <div class="upload-btn-wrapper">
                <button class="btn">Carica Immagini</button>
                <input type="file" name="myfile" multiple/>
            </div>
        </>
    )
}

export default UploadImage
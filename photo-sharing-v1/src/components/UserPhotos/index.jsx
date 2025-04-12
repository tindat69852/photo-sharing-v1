import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
import models from '../../modelData/models';

const UserPhotos = () => {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  return (
    <div style={{ padding: '20px' }}>
      {photos.length === 0 ? (
        <Typography variant="h6" color="textSecondary">
          No photos available for this user.
        </Typography>
      ) : (
        photos.map((photo) => (
          <Card key={photo._id} style={{ marginBottom: '16px', maxWidth: '600px', margin: 'auto' }}>
            {/* Hiển thị hình ảnh */}
            <img
          
              className="img-resize"
              src={require(`../../images/${photo.file_name}`)}
              alt="User Upload"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginBottom: '10px',
              }}
            />
            <CardContent>
              {/* Ngày giờ tải ảnh */}
              <Typography variant="body2" color="textSecondary">
                Posting Date: {new Date(photo.date_time).toLocaleString()}
              </Typography>
              {/* Hiển thị bình luận */}
              {photo.comments && photo.comments.map((comment) => (
                <div key={comment._id} style={{ marginTop: '8px' }}>
                  <Typography variant="caption">
                    {new Date(comment.date_time).toLocaleString()} -{' '}
                    <Link to={`/users/${comment.user._id}`}>
                      {`${comment.user.first_name} ${comment.user.last_name}`}
                    </Link>: {comment.comment}
                  </Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default UserPhotos;
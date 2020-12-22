import qs from 'qs';
import request from '@/utils/request';

export function getSections() {
  return request({
    url: '/constructor/getSections',
    method: 'post',
  });
}

export function setSectionComponent(data) {
  const options = qs.stringify(data);
  return request({
    url: '/constructor/setSectionComponent',
    method: 'post',
    data: options,
  });
}

export function setSectionDetail(data) {
  const options = qs.stringify(data);
  return request({
    url: '/constructor/setSectionDetail',
    method: 'post',
    data: options,
  });
}

export function getData() {
  return request({
    url: '/constructor/getData',
    method: 'post',
  });
}

export function setProfile(data) {
  const options = qs.stringify(data);

  return request({
    url: '/updateProfile',
    method: 'post',
    data: options,
  });
}
